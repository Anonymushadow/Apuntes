const express = require("express");

const { programacion } = require("../cursos.js").infoCursos;

const programacionRouter = express.Router();
programacionRouter.use(express.json());

programacionRouter.get("/", (req, res)=> {
    res.status(200).send(programacion)
})
programacionRouter.get("/:tema", (req, res)=> {
    res.status(200).send(programacion);
})

programacionRouter.post("/", (req, res)=> {
    const body = req.body;
    programacion.push(body);
    res.status(200).send(JSON.stringify(programacion));
});


//para put hay que reescribir todo el contenido a modificar
programacionRouter.put("/:id", (req, res)=> {
    const body = req.body;
    const id = req.params.id;
    //almacenara el indice de curso cuyo id sea idual al id almacenado obtenido de los parametros
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = body;
    }

    res.status(200).send(JSON.stringify(programacion));
});

programacionRouter.patch("/:id", (req, res )=> {
    const infoNueva = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        Object.assign(programacion[indice], infoNueva);
    }

    res.status(200).send(JSON.stringify(programacion));

});

programacionRouter.delete("/:id", (req, res)=> {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice, 1);
    }

    res.status(200).send(JSON.stringify(programacion));
});

module.exports = programacionRouter;