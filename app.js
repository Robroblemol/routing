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
app.get("/algo",function (res,req) {
    res.render("form");
});

app.listen(8080);// escuchamos peticiones
