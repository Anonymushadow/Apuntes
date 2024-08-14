const express = require("express");

const app = express();

const { infoCursos } = require("./cursos.js");
const { json } = require("body-parser");

//routers 
const routerApi = express.Router();
app.use("/api/", routerApi); //routerApi va a ser igual a /api/

app.get("/", (req, res)=> {
    res.send("Bienvenido");
});


routerApi.get("/users", (req, res)=> {
    res.send("Usuarios");
});


routerApi.get("/about", (req, res)=> {
    res.send("Sobre nosotros");
});


routerApi.get("/cursos", (req, res)=> {
    res.send(JSON.stringify(infoCursos));
});

//parametros
routerApi.get("/cursos/:materia", (req, res) => {
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