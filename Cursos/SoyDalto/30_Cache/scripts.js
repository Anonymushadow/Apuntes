"use strict"

// memoria a coto plazo para que no se pida tantas veces la misma informacion

// se guarda en el navegador para que cuando se vuelva a abrir la pagina no se tenga que cargar todo de vuelta

caches.open("Archivos-estaticos").then(cache=>{
	cache.add("index.html");
	cache.addAll(["index.html", "estilos.css", "scripts.js"]);
	cache.match("index.html").then(res=>{
		console.log(res);
	});
	cache.keys().then(res=>{
		console.log(res);
	});
	cache.delete("index.html");
	//add envia una peticion, le das una url y almacena el recurso asociado
});
// abre o crea un cache 
//con then() trabajamos con las promesas

caches.open("Fetch").then(cache=>{
	fetch("index.html").then(res=>{
		cache.put("index.html", res);
	})
})