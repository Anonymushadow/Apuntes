const sumar = (num1, num2) =>{
	return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) =>{
	return parseInt(num1) - parseInt(num2);
}

const dividir = (num1, num2) =>{
	return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1, num2) =>{
	return parseInt(num1) * parseInt(num2);
}



cuenta = prompt("¿que operacion desea relizar?  1:suma 2:resta 3:multiplicacion 4:division");

if (cuenta == 1) {
let num1 = prompt("cual es el primer numero?");
let num2 = prompt("cual es el segundo numero?");
resultadoSuma = sumar(num1,num2);
alert(`el resultado es ${resultadoSuma}`);
}

if (cuenta == 2) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoResta = restar(num1,num2);
	alert(`el resultado es ${resultadoResta}`);
}

if (cuenta == 3) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoMultiplicacion = multiplicar(num1,num2);
	alert(`el resultado es ${resultadoMultiplicacion}`);
}

if (cuenta == 4) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoDivision = dividir(num1,num2);
	alert(`el resultado es ${resultadoDivision}`);
}