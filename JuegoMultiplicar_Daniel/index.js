var express = require("express");
var body_parser = require('body-parser');
var router = express.Router();
var app = express();

app.set("view engine", "jade");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

//--------------INICIO
app.get("/", function(req, res) {
    res.render("index");
});

//--------------JUEGO
app.post("/jugar", function (req, res) {
    var numero = req.body.numero;
    res.render("jugar",{num: numero});
});

//--------------COMPROBAR RESULTADO
app.post("/comprobar", function(req, res) {
    var resp = [];
    for (let index = 0; index < req.body.caja.length; index++) {
       if (!req.body.caja[index]) {
            resp.push(0);
       }else{
            resp.push(req.body.caja[index]);
       }
    }
    res.render("jugar",{num : req.body.val[0], resp : resp});
});

app.listen(8086);