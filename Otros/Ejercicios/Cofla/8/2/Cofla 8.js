let alumnos = [{
	nombre: "Thomas Santos",
	mail: "thomasasntos@gmail.com",
	materia: "ingles"
},{
	nombre: "Facundo Robert",
	mail: "facurobert@gmail.com",
	materia: "fisica"
},{
	nombre: "Samantha Segunda",
	mail: "saman@gmail.com",
	materia: "ingles"
},{
	nombre: "Ariel Fernandez",
	mail: "afernandez@gmail.com",
	materia: "matematicas"
},{
	nombre: "Pablo Picasso",
	mail: "pablitop@gmail.com",
	materia: "arte"
},{
	nombre: "Sarah Hart ",
	mail: "sarhart@gmail.com",
	materia: "historia"
},{
	nombre: "Claudia Ramona",
	mail: "claudiaaramona@gmail.com",
	materia: "geografia"
}];
let contenedor = document.querySelector(".grid-container");
let boton = document.querySelector(".boton");

for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let mail = datos["mail"];
	let materia = datos["materia"];
	let htmlCode = 
	`<div class="nombre">${nombre}</div>
		<div class="mail">${mail}</div>
		<div class="materia">${materia}</div>
		<div class="grid-item semana">	
		  <select class="semana-elegida">
			<option value="Semana 1">Semana 1</option>
			<option value="Semana 2">Semana 2</option>
		  </select>	</div>
	</div>`;

		 contenedor.innerHTML += htmlCode;
}


boton.addEventListener("click",()=>{
	let elementos = document.querySelectorAll(".semana");
	let semanasElegidas = document.querySelectorAll(".semana-elegida");
	for (elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML = semanasElegidas[elemento].value;
	}
	document.body.removeChild(boton);
});