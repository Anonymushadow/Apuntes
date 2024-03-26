"use strict"

history.back();
history.forward()

//history go(), dentro de los parentesis va 1 si quiero la pagina siguiente, 0 si quiero recargar y -1 si quiero retroceder de pagina

history.pushState({nombre: "pagina2"}, "titulo", "?agregado"); 

//state = {nombre: "pedro"}


addEventListener("popstate", (e)=>{
	console.log(e.state);
})