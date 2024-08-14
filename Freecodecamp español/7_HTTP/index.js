const http = require("http");

const puerto = 3000;
const servidor = http.createServer((req, res)=> {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.statusCode);
    res.statusCode = 404;
    console.log(req.statusCode);

    res.setHeader("Content-type", "aplication/json");
    res.end("Hola mundo");
});





servidor.listen(puerto, ()=> {
    console.log(`el servidor esta escuchando en el purto http://localhost:${puerto}`)
})