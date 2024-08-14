const http = require("http");
const cursos = require("./cursos.js");


const manejarGet = (req, res)=> {
    const PATH = req.url;

    if(PATH === "/"){
        res.statusCode = 200;
        res.end("Home");
    }else if(PATH === "/cursos"){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else{
        res.statusCode = 404;
        res.end("La pagina no existe");
    }
}

const manejarPost = (req, res)=> {
    const PATH = req.url;
    if(PATH == "/cursos"){
        let cuerpo = "";

        //al escuchar el evento data...
        req.on("data", (contenido)=> {
            //el contenido que envian lo almaceno en una variable
            cuerpo += contenido.toString();
        })

        //al escuchar el evento end...
        req.on("end", (contenido)=> {
            console.log(cuerpo);

            //lo convierto en un objeto de js (osea en un json)
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo.titulo);
        })
    }
}

const manejarPut = (req, res)=> {
    console.log("PUT");
}

const manejarDelete = (req, res)=> {
    console.log("DELETE");
}


const server = http.createServer((req, res)=> {
    const { method } = req;

    switch(method){
        case "GET":
            return manejarGet(req, res);
            break;
        case "POST":
            return manejarPost(req, res);
            break;
        case "PUT":
            return manejarPut(req, res);
            break;
        case "DELETE":
            return manejarDelete(req, res);
            break;
        default: 
            console.log("error");
            break;
    }
});


server.listen(3000, ()=>{
    console.log("Puerto 3000");
});






