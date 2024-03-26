"use strict"
let archivo = document.querySelector(".archivo");

archivo.addEventListener("change", (e)=>{
	leerArchivo(archivo.files[0]);
})

let leerArchivo = ar =>{
	const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", (e)=>{
    	console.log(e.currentTarget.result);
    })
}

//usar typeof para saber si es un jason y si deserializarlo o no

//varios archivos

let archivos = document.querySelector(".archivos");

archivos.addEventListener("change", (e)=>{
	leerArchivo(archivos.files)
})

leerArchivo = ar => {
	for (var i = 0; i < ar.length; i++) {
		const reader = new FileReader();
		reader.readAsText(ar[i]);
		reader.addEventListener("load", (e)=>{
			console.log(e.currentTarget.result);
		})
	}	
}


// imagenes con url

let imgs = document.querySelector(".imgs");

imgs.addEventListener("change", (e)=>{
	leerArchivo(imgs.files)
})

leerArchivo = ar => {
	for (var i = 0; i < ar.length; i++) {
		const reader = new FileReader();
		reader.readAsDataURL(ar[i]);
		reader.addEventListener("load", (e)=>{
			let img = `<img src="${e.currentTarget.result}">`;
			document.querySelector(".resultado").innerHTML += img;
		})
	}	
}