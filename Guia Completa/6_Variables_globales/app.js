const funcion = require("./datos.cjs");

funcion();

try {
    console.log(localVariable);
}catch(e){
    console.log("Errore: " + e);
}

try {
    console.log(globalVariable);
}catch(e){
    console.log("Errore: " + e);
}