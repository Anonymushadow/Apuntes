"use strict"

if (navigator.serviceWorker) {
	console.log("bien");
	navigator.serviceWorker.register("worker.js");
}else{
	console.log("mal");
}

navigator.serviceWorker.ready.then(res=>{
	res.active.postMessage("hola como estas?");
})

navigator.serviceWorker.addEventListener("message", e=>{
	console.log("Mensaje recibido del Service Worker");
	console.log(e.data);
})