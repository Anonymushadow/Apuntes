"use strict"

//dedicated worker = hace algo en segundo plano porque se va a tradar y mientras tanto se va a hacer mas acciones
const worker = new Worker("worker.js");

document.querySelector(".button").addEventListener("click", ()=>{
	ejecutarBucle();
})

const ejecutarBucle = ()=>{
	worker.postMessage(true);
	worker.terminate();
}
//inicias el worker y le pones el archivo a trabajar
