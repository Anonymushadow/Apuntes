const fs = require("fs");


//FORMA ASINCRONA
fs.readFile("7_fs.html", "Utf8", (err, contenido)=> {
    if(err){
        throw err;
    }else{
        console.log(contenido);
    }
});

/*
fs.rename("7_fs.html", "7_main.html", (err)=> {
    if(err){
        throw err;
    }
});
*/

fs.appendFile("7_fs.html", "<p>Hola</p>", (err)=> {
    if(err){
        throw err;
    }else{
        console.log("archivo actualizado...");
    }
});

fs.writeFile("7_fs.html", "Archivo dañado", (err)=> {
    err ? console.log(err) : console.log("Exito")
})

fs.unlink("fs.html", (err)=> err ? console.error(err) : console.log("Archivo eliminado"));




//FORMA SINCRONA
fs.readFileSync("7_fs.html", "Utf8", (err, contenido)=> {
    if(err){
        throw err;
    }else{
        console.log(contenido);
    }
});

/*
fs.rename("7_fs.html", "7_main.html", (err)=> {
    if(err){
        throw err;
    }
});
*/

fs.appendFileSync("7_fs.html", "<p>Hola</p>", (err)=> {
    if(err){
        throw err;
    }else{
        console.log("archivo actualizado...");
    }
});

fs.writeFileSync("7_fs.html", "Archivo dañado", (err)=> {
    err ? console.log(err) : console.log("Exito")
})

fs.unlinkSyn("fs.html", (err)=> err ? console.error(err) : console.log("Archivo eliminado"));

