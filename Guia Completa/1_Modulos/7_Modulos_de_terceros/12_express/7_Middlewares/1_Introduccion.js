const express = require("express");
const app = express();

//creamos un middleware
app.use((req, res, next)=> {
    console.log("Ruta " + req.url + ", Metodo " + req.method);
    next();
})


//middleware para veridicar si esta autenticado y manejar permisos
app.use((req, res)=> {
    if(req.body.loggin === "claudelnahuel22@gmail.com"){
        next();
    }else{
        res.send("No autorizado");
    }
})

app.get("/dashboard", (req, res)=> {
    res.send("Dashboard");
})


app.get("/", (req, res)=> {
    res.send("Bienvenido");
});


app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});