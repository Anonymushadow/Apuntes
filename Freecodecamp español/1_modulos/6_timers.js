setTimeout(()=>{
    console.log("Pasaron 3 segundos");
}, 5000);


let i = 1;
setInterval(()=> {
    console.log(i);
    i++;
}, 1000);


setImmediate(()=> {
    console.log("0 Segundos");
})


//enviando parametros
function saludar(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludar, 5000, "Nahuel");