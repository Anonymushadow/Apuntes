let nombre = document.getElementById("nombre");
let mail = document.getElementById("mail");
let materia = document.getElementById("materia");
let envio = document.getElementById("envio");
let info = document.querySelector(".info");
let entrega = ["el nombre debe contener entre 5 y 40 caracteres", "por favor introduzca al menos una materia", "por favor introduzca un correo valido", "el formulario se envio correctamente"];


envio.addEventListener("click", (e)=>{
	e.preventDefault();
	if (nombre.value.length < 5 || nombre.value.length > 40) {
		info.innerHTML = entrega[0];
		info.classList.add("red");
	}else if (mail.value.indexOf("@gmail.com") == -1) {
		info.innerHTML = entrega[2];
		info.classList.add("red");
	}else if (materia.value.length < 5) {
		info.innerHTML = entrega[1];
		info.classList.add("red");
	}else{
		info.innerHTML = entrega[3];
		info.classList.add("green");
	}
})