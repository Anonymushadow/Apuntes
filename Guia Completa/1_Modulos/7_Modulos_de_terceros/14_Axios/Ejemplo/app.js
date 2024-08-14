const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
require("ejs");

//settings
app.set("appName", "expressCouse");
app.set("PORT", 3000);
//especifico que utilizare ejs
app.set("view engine", "ejs");
//indico la ubicacion de la carpeta que contiene los ejs
app.set("views", path.join(__dirname, "views"));

//routes
const descripcionHTML = '<strong>Texto en negrita</strong> y <em>Texto en cursiva</em>';

app.get("/", (req, res)=> {
    res.send("Hola mundo");
});

app.get("/about", (req, res)=> {
    res.render("index", {data: false});
})


app.get("/products", async (req, res)=> {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data; // Acceder a la propiedad "data" de la respuesta

        res.render("index", { data: data }); // Pasar "data" a la plantilla EJS
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los datos");
    }

})


const PORT = app.get("PORT");
app.listen(PORT, ()=> {
    console.log(app.get("appName") + " iniciada en el puerto " + PORT);
})