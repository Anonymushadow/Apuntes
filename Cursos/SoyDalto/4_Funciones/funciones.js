function saludar(){
	saludo = prompt("buenos dias");
	if (saludo == "hola"){
		document.write("x");
	} else {
		document.write("xx");
	}
}

saludar()



saludar2 = function(){
	saludo2 = prompt("como estas?");
	if (saludo2 == "bien"){
		document.write("x");
	} else {
		document.write("xx");
	}
}

document.write("<br>");



saludar2()

function prueba(){
	alert("hola");
	return "la funcion se ejecuto correctamente";
}

let numeros = prueba();

document.write("numeros");

document.write("<br>");



//parametros
function suma(num1, num2){
	let res = num1 + num2;
	document.write(res);
	document.write("<br>");
}

suma(12,32);


function nomb(nombre){
	let nombre1 = `hola ${nombre}, como estas?`
	document.write(nombre1);
	document.write("<br>");
}

nomb("Nahuel");


const prueba1 = function(ejemplo1){
	let frase = `hola ${ejemplo1} como estas?`
	document.write(frase);
}

prueba1("extraño");

//funciones en flecha
const hola = (texto)=>{
	let txt = `hola ${texto} como estas?`
	document.write(txt);
	document.write("<br>");
}

hola("juan");



const adios = despedida=>document.write(despedida + " que te vaya bien <br>");


adios("pedro");