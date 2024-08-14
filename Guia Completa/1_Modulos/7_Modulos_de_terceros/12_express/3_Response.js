const express = require("express");
const app = express();

app.get("/", (req, res)=> {
    res.send("Bienvenido");
});


//devolver archivos
app.get("/archivo", (req, res)=> {
    res.sendFile("./images.jpg", {
        root: __dirname
    });
});

//devolver json
app.get("/json", (req, res)=> {
    const json = {
        "name": "Nahuel",
        "age": 20
    }
    res.json(json);
});

//responder solo con un codigo de estado
app.get("/isAlive", (req, res)=> {
    res.sendStatus(200);
});

app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});