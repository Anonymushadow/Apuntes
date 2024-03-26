"use strict"

self.addEventListener("install", e=>{
	console.log("instalando service worker");
})

self.addEventListener("activate", e=>{
	console.log("el service worker esta activo");
})

self.addEventListener("error", e=>{
	console.log("ups... hubo un error");
})

//le enviamos info. al s.w 

self.addEventListener("fetch", ()=>{
	console.log("Mensaje recibido");
})

self.addEventListener("message", e=>{
	console.log("Mensaje recibido del Navegador: ");
	console.log(e.data);
	e.source.postMessage("Hola");
})
