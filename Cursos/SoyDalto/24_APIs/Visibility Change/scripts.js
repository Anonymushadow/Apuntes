"use strict"

addEventListener("visibilitychange", e=>{
	console.log("se ha cambiado de pestaña");
	console.log(document.visibilityState);
})