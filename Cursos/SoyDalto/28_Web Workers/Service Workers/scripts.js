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

















// "use strict"

// let usuario1 = document.querySelector(".usuario1");
// let usuario2 = document.querySelector(".usuario2");
// let usuario0;
// let hombre = document.querySelector(".left");
// let mujer = document.querySelector(".right");
// let btnEnvio = document.querySelectorAll(".mensajeEnviar");
// let inputU1 = document.querySelector(".redacto1");
// let inputU2 = document.querySelector(".redacto2");
// let input = [inputU1, inputU2];
// let dialogo1 = document.querySelector(".dialogo1");
// let dialogo2 = document.querySelector(".dialogo2");
// let dialogos = [dialogo1, dialogo2];
// let chat;
// let ajustes = document.querySelectorAll(".ajustes");
// let usuario = 0;
// let mensaje;

// const eleccion = (usuario, numeroUsuario)=>{
// 	hombre.classList.add("hide");
// 	mujer.classList.add("hide");
// 	usuario.classList.toggle("hide");
// 	usuario0 = numeroUsuario;
// }


// if (navigator.serviceWorker) {
// 	navigator.serviceWorker.register("usuario2.js");
// }else{
// 	alert("lo sentimos pero algo esta fallando");
// }


// hombre.addEventListener("click", ()=>{
// 	eleccion(usuario1, 0);
// })

// mujer.addEventListener("click", ()=>{
// 	eleccion(usuario2, 1);
// })

// navigator.serviceWorker.ready.then(res=>{
// 	for (let i = 0; i < btnEnvio.length; i++) {
// 		btnEnvio[i].addEventListener("click", ()=> {
// 			Agregar(i, res, input[i].value);
// 		});
// 	} 


// navigator.serviceWorker.addEventListener("message", e=>{
// 	for (let j = 0; j < dialogos.length; j++) {
// 		Agregar(j, res, e.data);
// 	}
// })



// const Agregar = (i, res, valor)=>{
// 	for (let j = 0; j < dialogos.length; j++) {
// 		chat = document.createElement("DIV");
// 		chat.classList.add("chat");
// 		clases(usuario, i, j);
// 		res.active.postMessage(valor);
// 		chat.textContent = valor;
// 		dialogos[j].appendChild(chat);
// 	}
// }


// const clases = (usuario, mensaje, ct)=>{
// 	if (usuario == mensaje) {
// 		if (mensaje == ct){
// 			chat.classList.add("derecha");
// 		}else{
// 			chat.classList.add("izq");
// 		}
// 	}else{
// 		if (mensaje == ct){
// 			chat.classList.add("derecha");
// 		}else{
// 			chat.classList.add("izq");
// 		}
// 	}
// }

// })


// //enviar mensaje a s.w
// //devuelve 
// //se crea el mesaje 
// //se agrega el mensaje
// //hacer funcion que le agregue a chat el mensaje + las clases asi cuando llega el mensaje del sw solo le envias el mensaje y crea el chat y pones un return chat







// "use strict"

// if (navigator.serviceWorker) {
// 	console.log("bien");
// 	navigator.serviceWorker.register("worker.js");
// }else{
// 	console.log("mal");
// }

// navigator.serviceWorker.ready.then(res=>{
// 	res.active.postMessage("hola como estas?");
// })

// navigator.serviceWorker.addEventListener("message", e=>{
// 	console.log("Mensaje recibido del Service Worker");
// 	console.log(e.data);
// })

