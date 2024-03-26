// //las clausuras son funciones que retornan otras funciones
// const saludar = (nombre)=> {
// 	return function(){
// 		console.log("Hola " + nombre);
// 	}
// }

// let saludo = saludar("pedro");

// addEventListener("load", saludo);





const cambiarTamano = tamano =>{
	return ()=>{
		document.querySelector(".texto").style.fontSize = `${tamano}px`
	}
}

px12 = cambiarTamano(12);
px14 = cambiarTamano(14);
px16 = cambiarTamano(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);