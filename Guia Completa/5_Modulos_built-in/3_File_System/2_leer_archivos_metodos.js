const fs = require("fs");
const fsp = require("fs").promises;

let datos;
let url = "./datos.txt";



//leer archivo metodo 1 (con .promises)
const leerArchivo = async(url)=> {
    datos = await fsp.readFile(url, "utf-8");
    console.log(datos);
} 


//leer archivo metodo 2 (lo mas comun, sin el promises)
const leerArchivo2 = (url)=> {
    fs.readFile(url, "utf-8", (err, data)=> {
        if(data){
            datos = data;
            console.log(datos);
        }else{
            console.error(err);
        }
    })
}

leerArchivo(url);
leerArchivo2(url);