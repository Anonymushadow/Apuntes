const express = require("express");
const morgan = require("morgan");
const app = express();


app.use(morgan("dev"));



app.get("/", (req, res)=> {
    res.send("Bienvenido");
});

app.get("/dashboard", (req, res)=> {
    res.send("Dashboard");
})

app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});