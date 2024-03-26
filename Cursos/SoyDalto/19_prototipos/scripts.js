//prototipos son objetos creados a partir de otros objetos previamente existentes
let variable = {
	"propiedad": "datos"
}
//todos los objetos tienen el prototipo object
//todos los objetos tienen tienen dos prototipos: el tipo de datos y el prototipo object

console.log(variable.__proto__);
console.log(variable);

variable = "Hola Mundo";

console.log(variable.__proto__);
console.log(variable);
//prototipo string y prototipo object


//__proto__ accede a los prototipos creados automaticamente
//prototype accede a los prototipos creados por uno
console.log(variable.prototype);
console.log(variable.__proto__);
 
//cuando creamos funciones estamos creando prototipos nosotros
variable = function(){};

console.log(variable.prototype.__proto__);

//los prototipos creados por uno son modificables
//los prototipos son objetos
//los prototipos tienen una existencia fisica
//dunder proto  = .__proto__

class Objeto {
	constructor(){};
	hablar(){
		console.log("hola");
	}
}

let objeto = new Objeto();

//aca modificas un prototipo
objeto.__proto__.hablar = ()=>{
	console.log("modificado afuera");
}

console.log(objeto);
//al crear constructor y metodo estamos modifiicando el prototipo


//heredar prototipos de objeto
let arr = [];

arr.__proto__ = objeto;

arr.hablar();


