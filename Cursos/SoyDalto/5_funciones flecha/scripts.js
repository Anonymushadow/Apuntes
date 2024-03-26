let saludar = ()=>{
	console.log("hola");
	console.log("como estas?");
}
//aca no devuelve el cuerpo

let resultado = saludar();

console.log(resultado);




saludar = ()=> nombre = "Hola";
//esta funcion devuelve esta expresion

resultado = saludar();

console.log(resultado);



//con un solo parametro no hace falta los parentesis
saludar = (res)=> nombre = res;

resultado = saludar();

console.log(resultado);

//sin parentesis
saludar = res=> nombre = res;

resultado = saludar();

console.log(resultado);

//sin parametros si se necesitan parentesis
saludar = ()=> nombre = "resultado";

resultado = saludar();

console.log(resultado);


//no son recomendadas para metodos
//funciones normales
let objeto = {
	Nombre: "lucas",
	saludar: function(){console.log("hola " + this.Nombre)}
}

objeto.saludar();

//funciones flecha
objeto = {
	Nombre: "lucas",
	saludar: ()=>{console.log("hola " + this.Nombre)}
}

objeto.saludar();

//no se puede usar como constructor
function constructorPersona(nombre, apellido){
	this.nombre = nombre;
	this.apellido = apellido;
}

let persona = new constructorPersona("lucas", "dalto");

console.log(persona.apellido);






