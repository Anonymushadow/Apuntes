const express = require("express");
const app = express();

//configutar express para que acepte textos como cuerpos de la peticion
app.use(express.text());
//configutar express para que acepte objetos json como cuerpos de la peticion
app.use(express.json());
//configutar express para que acepte formulario como cuerpos de la peticion
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=> {
    res.send("Bienvenido");
});

//ver el contenido que envio el usuario
app.post("/usuario", (req, res)=> {
    const body = req.body; 
    console.log(body);
    res.send("Recibido");
})



app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});