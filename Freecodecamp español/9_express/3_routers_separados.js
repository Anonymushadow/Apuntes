const express = require("express");

const app = express();

const { infoCursos } = require("./cursos.js");
const { json } = require("body-parser");

const matematicasRouter = require("./routers/Matematicas.js");
const programacionRouter = require("./routers/Programacion.js");
//cualquier solicitud que comience con /api/cursos/matematicas debe ser manejada por el enrutador matematicasRouter.
app.use("/api/cursos/matematicas", matematicasRouter);
app.use("/api/cursos/programacion", programacionRouter);

app.get("/", (req, res)=> {
    res.send("Bienvenido");
});

app.get("/api/cursos", (req, res)=> {
    res.send(infoCursos);
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