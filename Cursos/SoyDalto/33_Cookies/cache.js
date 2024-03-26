"use strict"

const version = "version 0"; 

self.addEventListener("install", e=>{
	console.log("instalando service worker");
	caches.open(version).then(cache=>{
		cache.add("index.html").then(res =>{
			console.log("info. cacheada");
		}).catch(e=>{
			console.log(e);
		});
	})
})

self.addEventListener("activate", ()=>{
	console.log("el service worker esta activo");
	caches.keys().then(key=> {
		return Promise.all(
			key.map(cache=>{
				if (cache !== version) {
					console.log("cache renovado");
					return caches.delete(cache);
				}
			})
			);
	})
})

self.addEventListener("error", e=>{
	console.log("ups... hubo un error");
})

//le enviamos info. al s.w 

self.addEventListener("fetch", (e)=>{
	e.respondWith(async function()=>{
		const respuesta = await caches.match(e.request);
		if (respuesta) {
			return respuesta;
		}else{
			return e.request;
		}
	}
	);
}
)

self.addEventListener("message", e=>{
	console.log("Mensaje recibido del Navegador: ");
	console.log(e.data);
	e.source.postMessage("Hola");
})