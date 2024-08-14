const fs = require("fs");

let datos;
let url = "./datos.txt";

const leerImg = (url)=> {
    fs.readFile(url, "utf-8", (err, data)=> {
        if(err){
            console.log(err);
        }else{
            datos = data;
            // crear un <img src="data:image/jpeg;base64,{{imageData}}" alt="Imagen desde Buffer">
        }
    })
} 