const express = require("express");
const app = express();

app.get("/:nombre", (req, res)=> {
    const nombre = req.params.nombre;
    res.send("Bienvenido " + nombre);
});

//parametros query
app.get("/", (req, res)=> {
    const nombre = req.query.nombre;
    res.send("Bienvenido " + nombre);
});

//manejar cualquier metodo
app.all("/info", (req, res)=> {
    res.send("server info");
})
//si pongo get funciona, si pongo post, si pongo put, etc



app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});