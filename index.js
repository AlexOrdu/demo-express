var express = require('express');

var app = express();
app.set("view engine", "pug");


app.get('/', function(req, res) {
var nombre = new object();
nombre.primerNombre = "Alejandro";

  res.render("index", {nombre:nombre});
});

app.listen(8080);
