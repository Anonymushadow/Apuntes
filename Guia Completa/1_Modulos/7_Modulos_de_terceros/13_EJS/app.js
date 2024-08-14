const express = require("express");
const path = require("path");
const app = express();
require("ejs");

//settings
app.set("appName", "expressCouse");
app.set("PORT", 3000);
//especifico que utilizare ejs
app.set("view engine", "ejs");
//indico la ubicacion de la carpeta que contiene los ejs
app.set("views", path.join(__dirname, "views"));

//middlewares
//... midlewares a usar

//routes
const descripcionHTML = '<strong>Texto en negrita</strong> y <em>Texto en cursiva</em>';

app.get("/", (req, res)=> {
    const nombre = "Nahuel";
    res.render("index", {nombre: nombre, data: descripcionHTML});
})

app.get("/p", (req, res)=> {
    const nombre = "Pablito";
    res.render("index", {nombre: nombre, data: descripcionHTML});
})


const PORT = app.get("PORT");
app.listen(PORT, ()=> {
    console.log(app.get("appName") + " iniciada en el puerto " + PORT);
})