const express = require("express");

const { matematicas } = require("../cursos.js").infoCursos;

const matematicasRouter = express.Router();

// defines las rutas y las funciones que se ejecutarán cuando esas rutas sean accedidas.
matematicasRouter.get("/", ()=> {
    res.send(matematicas);
})
matematicasRouter.get("/:tema", ()=> {
    res.send(matematicas);
})

module.exports = matematicasRouter;