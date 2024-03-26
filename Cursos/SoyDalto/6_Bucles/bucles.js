let numero = 0;
let numeroDos = 0;
let numeroTres = 0;
let animales = ["gato","perro","tiranosaurio rex"];
let array1 = ["pedro","josefa","roberta"];
let array2 = ["pedro","marcelo",array1,"josefina"];


while ( numero < 9){
	numero++;
	document.write(numero);
	document.write("<br>");
};

document.write("<br> <br>");

do{
	numeroDos++;
	document.write(numeroDos);
	document.write("<br>");
}
while (numeroDos < 10);
document.write("<br> <br>");

while (numeroTres < 1000){
	numeroTres++;
	document.write("<br>");
	document.write(numeroTres);
	if (numeroTres == 22){
		break;
	}
};

document.write("<br> <br>");

for (let i = 0; i < 6; i++){
	document.write(i);
	document.write("<br>");
};

document.write("<br> <br>");

for (animal in animales){
	document.write(animal + "<br>");
}

document.write("<br> <br>");

for(animal of animales){
	document.write(animal + "<br>");
}

document.write("<br> <br>");

forRancio:
for (let array in array2){
	if (array == 2){
		for (let array of array1){
			document.write(array + "<br>");
			break forRancio;
		}	
	} else{
		document.write(array2[array] + "<br>");
	}
}