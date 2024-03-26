class Calculadora {
	constructor(){}

//1-suma
 sumar(num1, num2){
	return parseInt(num1) + parseInt(num2);
}

//2-resta
 restar(num1, num2){
	return parseInt(num1) - parseInt(num2);
}

//multiplicacion
 dividir(num1, num2){
	return parseInt(num1) / parseInt(num2);
}

//4-multiplicacin
 multiplicar(num1, num2){
	return parseInt(num1) * parseInt(num2);
}

//5-potenciacion
  potenciar(num1, num2){
	return parseInt(num1) ** parseInt(num2);
}

//6-raiz cuadrada
 raizCuadrada(num1){
	num1 = parseInt(num1);
	num1 = Math.sqrt(num1);	
	return num1;
}

//7-raiz cubica
 raizCubica(num1){
	num1 = parseInt(num1);
	num1 = Math.pow(num1,1/3);	
	return num1;
}

}

const calculadora = new Calculadora();

cuenta = prompt("¿que operacion desea relizar?  1:suma 2:resta 3:multiplicacion 4:division 5:potenciacion 6:raiz cuadrada 7:raiz cubica");

if (cuenta == 1) {
let num1 = prompt("cual es el primer numero?");
let num2 = prompt("cual es el segundo numero?");
resultadoSuma = calculadora.sumar(num1,num2);
alert(`el resultado es ${resultadoSuma}`);
}

if (cuenta == 2) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoResta = calculadora.restar(num1,num2);
	alert(`el resultado es ${resultadoResta}`);
}

if (cuenta == 3) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoMultiplicacion = calculadora.multiplicar(num1,num2);
	alert(`el resultado es ${resultadoMultiplicacion}`);
}

if (cuenta == 4) {
let num1 = prompt("cual es el 1er numero?");
let num2= prompt("cual es el segundo numero?");
resultadoDivision = calculadora.dividir(num1,num2);
	alert(`el resultado es ${resultadoDivision}`);
}

if (cuenta == 5) {
let num1 = prompt("cual es el primer numero?");
let num2 = prompt("por cuanto lo queres potenciar?");
resultadoPotencia = calculadora.potenciar(num1,num2);
alert(`el resultado es ${resultadoPotencia}`);
}

if (cuenta == 6) {
let num1 = prompt("cual es el numero para sacar su raiz cuadrada?");
resultadoRaizCuadrada = calculadora.raizCuadrada(num1);
alert(`el resultado es ${resultadoRaizCuadrada}`);
}

if (cuenta == 7) {
let num1 = prompt("cual es el numero para sacar su raiz cubica?");
resultadoRaizCubica = calculadora.raizCubica(num1);
alert(`el resultado es ${resultadoRaizCubica}`);
}