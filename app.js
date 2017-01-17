var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express

app.set("view engine","jade");

//Verbos Http => GET / POST /PUT/ PATCH/ HEADER /DELETE

app.get("/",function(req,res) {
  res.render("index");
  //res.send("hola mundo con express!!");// invia la respuesta y cierra la conexion
});
app.post("/",function (req,res) {
  res.render("form");
});
app.get("/algo",function (req,res) {
    res.render("form");
});
app.get("/:nombre",function (req,res) {// pasar datos desde la vista
    console.log(req.params.nombre);
    res.render("form",{nombre:req.params.nombre});
});

app.listen(8080);// escuchamos peticiones
