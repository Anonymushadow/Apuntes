const express = require("express");

//inciar la app
const app = express();

//manejar peticion get a la ruta incial
app.get("/", (req, res)=> {
    res.sendFile("./index.html", {
        root: __dirname
    });
});


//manejar rutas get inexistentes
app.get("*", (req, res)=> {
    res.send("404");
})


//manejar rutas de cualquier tipo inexistentes
app.use((req, res)=> {
    //enviamos un codigo de estado 404
    res.status(404).send("404");
})


//iniciamos el server
app.listen(3000, ()=>{});