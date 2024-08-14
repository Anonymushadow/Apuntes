const fs = require("fs");

let datos;
let url = "./datos.json";

const leerArchivoJson = (url)=> {
    fs.readFile(url, "utf-8", (err, data)=> {
        if(data){
            datos = JSON.parse(data);
            console.log(datos);
        }else{
            console.error(err);
        }
    })
}

leerArchivoJson(url);