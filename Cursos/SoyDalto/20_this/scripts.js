//this
//this es window si esta fuera de cualquier funcion
//si esta dentro de una funcion 
this.nombre = "perez";

function saludo(){
	console.log(`hola ${this.nombre}`);
}

objeto = {
	nombre: "lucas",
	saludo: saludo
	//es lo mismo que decir
	//saludo = console.log(`hola ${this.nombre`);
}
//esto devuelve lucas, objeto toma this como lucas
//si fuese una funcion flecha devuelve perez

//si la funcion es igual al valor se puede poner una sola ves
objeto = {
	nombre: "lucas",
	saludo
}

function otro(){
	nombre = "roberto",
	objeto.saludo()
}

objeto.saludo();

otro();