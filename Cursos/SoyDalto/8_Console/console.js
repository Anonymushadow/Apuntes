//capitulo 5: consola
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);
console.assert(5 < 4);

console.clear()

console.error("que hiciste?");
console.info("no esta mal");
console.log("hola");
console.table([49,5,8,434,3]);
console.warn("cuidado");
console.dir(2,4,3,2,4,554,54,3);

function sumar (num1, num2){
	document.write(num1, num2);
	console.count();
}

sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);
sumar(2,4);

console.countReset();

sumar(2,4);


console.group("Animales");
console.groupEnd();
console.group("Autos");
console.groupEnd();
console.group("Nombres");
console.groupEnd();
console.group("Objetos");
console.groupEnd();
console.group("Lenguajes");
console.groupEnd();
console.group("Clases");
console.groupEnd();
console.groupCollapsed();
console.groupEnd();

console.time();

console.timeLog();

console.log("%cHola","color:#800;background-color:black;border:solid blue;");