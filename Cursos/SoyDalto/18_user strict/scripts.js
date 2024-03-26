//el user script evita sintaxis malas
//es una instruccion para el interprete
//esto nos obliga a escribir todo 100% completo y correcto
//user strict evita que javascript te perdone errores 

//metodo 1 modo global
"use strict";

//variables
nombre: "lucas";
//falta declarar la variable, sin el use strict esto seria var por defecto

console.log(nombre);


//objetos 
let objeto = {};
//defineProperty() define una propiedad
object.defineProperty(objeto, "nombre", {value: "pedro",writeable: false});
//writeable define si se puede reescribir  o si solo es de lectura
console.log(objeto.nombre);



// string
objeto ={nombre: "lucas"};

object.preventExtensions(objeto);
//evita que se definan nuevas propiedades

objeto.apellido = "dalto";

console.log(objeto.nombre);

const str = "lucas";
str.canal = "soydalto";
console.log(str.canal);


// funciones

function hablar(texto, texto){
	//si los dos parametros son iguales se toma solo el ultimo
	console,log("pedro", "juan");
}


// delete

var x = "hola";

delete x;

console.log(x);


//delete usado correctamente

objeto = {
	nombre: "lucas"
}

delete objeto.nombre;

console.log(objeto.nombre);

//palabras reservadas

let package = 55;

console.log(package);


//this
function saludar(){
	this.nombre ="pedro";
	this.saludar = function(){
		console.log("hola" + this.nombre);
	}
}

obj = new saludar();

obj.saludar();
//this es undefined

//numeros octales llevan 0 y una o antes y no exite el with

console.log(098);

// arguments y eval no pueden ser variables

eval = "hola";

arguments = "hola";



//user strict se puede poner afuera y funciona para todo
//user strict puesto dentro de una funcion solo funciona dentro de es funcion

//user strict solo funciona al principio de todo el script o al principio de  la funcion