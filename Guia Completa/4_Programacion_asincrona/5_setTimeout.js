//sin parametros
setTimeout(()=> {
    console.log("pasaron 3 segundos");
}, 3000);

//con parametros
const nombre = "Nahuel";

setTimeout(()=> {
    console.log("mi nombre es: " + nombre);
}, 2000, nombre)