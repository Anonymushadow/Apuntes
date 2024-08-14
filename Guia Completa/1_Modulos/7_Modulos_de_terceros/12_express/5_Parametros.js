const express = require("express");
const app = express();

app.get("/:nombre", (req, res)=> {
    const nombre = req.params.nombre;
    res.send("Bienvenido " + nombre);
});

app.get("/usuario/:nombre/:apellido", (req, res)=> {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    res.send("Bienvenido " + nombre + " " + apellido);
});

app.get("/usuario/:nombre", (req, res)=> {
    const nombre = req.params.nombre;
    res.send("Bienvenido " + nombre);
});




app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});