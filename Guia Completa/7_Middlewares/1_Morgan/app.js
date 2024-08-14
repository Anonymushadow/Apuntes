const morgan = require("morgan");
const express = require("express");
const path = require("path");

const app = express();

const accessLogData = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

//esto nos muestra por consola :method :url :status :res[content-length] - :response-time ms
//con app.use lo hacemos global, funciona para todas las rutas
app.use(morgan("tiny"));

//tambien podemos especificar que queremos ver
app.use(morgan(":method :url :status"));

//podemos crear logs personalizados
morgan.token("type", function (req, res){
    return req.headers["content-type"]
})

app.use(morgan(":type"), { stream: accessLogData });



//al ponerlo ahi solo funciona para esta ruta, no hace falta ponerlo en app.use en este caso
app.get("/", morgan("tiny"), (req, res)=> {})


app.listen(3000, ()=> {})