var express = require("express");
var body_parser = require('body-parser');
var router = express.Router();
var app = express();

app.set("view engine", "jade");

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

//----PÁGINA PRINCIPAL
app.get("/", function (req, res) {
    res.render("index");
});

//-----VIENE DE HACER CLICK EN CUALQUIER SUBMIT DEL FORMULARIO
app.post("/validar", function (req, res) {
    var resul;
    var num1 = parseInt(req.body.n1);
    var num2 = parseInt(req.body.n2);

    if (req.body.sumar) {
        resul = num1 + num2;
    } else if (req.body.restar) {
        resul = num1 - num2;
    } else if (req.body.multiplicar) {
        resul = num1 * num2;
    } else if (req.body.dividir) {
        if (num2 == 0) {
            resul = "ERROR: No se puede dividir entre 0";
        } else {
            resul = num1 / num2;
        }
    } else {
        resul = "ERROR DESCONOCIDO";
    }
    res.render("index", { nombre: resul });
});

app.listen(8083);