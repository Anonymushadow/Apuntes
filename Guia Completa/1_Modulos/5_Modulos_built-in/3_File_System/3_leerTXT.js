const fs = require("fs");

let datos;
let url = "./datos.txt";

//leer archivo de texto
const leerArchivoTexto = (url)=> {
    fs.readFile(url, "utf-8", (err, data)=> {
        if(data){
            datos = data;
            console.log(datos);
        }else{
            console.error(err);
        }
    })
}

leerArchivoTexto(url);