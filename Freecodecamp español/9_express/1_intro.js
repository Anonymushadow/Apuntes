const express = require("express");

const app = express();

const { infoCursos } = require("./cursos.js");
const { json } = require("body-parser");


app.get("/", (req, res)=> {
    res.send("Bienvenido");
});


app.get("/users", (req, res)=> {
    res.send("Usuarios");
});


app.get("/about", (req, res)=> {
    res.send("Sobre nosotros");
});


app.get("/api/cursos", (req, res)=> {
    res.send(JSON.stringify(infoCursos));
});

//parametros
app.get("/api/cursos/:materia", (req, res) => {
    let materia = req.params.materia;
    if (infoCursos.hasOwnProperty(materia)) {
        res.send(JSON.stringify(infoCursos[materia]));

        //parametros query
        console.log(req.query.ordenar);
    } else {
        res.status(404).send("Materia no encontrada");
    }
});




//paginas inexistentes
app.get("*", (req, res) => {
    //le redirecciono a home
    res.status(404).redirect("/");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(PORT);
})