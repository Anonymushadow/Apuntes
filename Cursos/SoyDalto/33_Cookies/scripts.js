"use strict"

//cookie: clave = valor  atr;atr;atr;etc

// const crearCookies = (name, expires, path, age)=>{
// document.cookie = `${name};expires=${expires};path=${path};max-age=${age}`;	
// }

// crearCookies("usuario=Dalto", "Fri 13 Jan 2022 6:30:00 UTC", "/", "1000");





const fechaUTC = dias =>{
	let fecha = new Date();
	fecha.setTime(fecha.getTime() + dias * 1000*60*60*24);
	return fecha.toUTCString();
}

const crearCookie = (name, dias)=>{
	let expires = fechaUTC(dias)
	document.cookie = `${name};expires=${expires}`;
}


crearCookie("juan=juan?","4");

const obtenerCookie = cookieName=>{
	let cookies = document.cookie;
	cookies = cookies.split(";");
	for (let i = 0; cookies.length > i; i++){
		let cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName)) {
			return cookie.split("=")[1];
	}}
	return "lo siento pero esa cookie no existe";
}

//para modificar una cookie hay que reescribirla

//para borrar reescribis y le das 0 a expires para que se borre en 0 segundos