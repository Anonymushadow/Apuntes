const opcion = {
opcion1: [0.6, "Helado de agua"],
opcion2: [1, "Helado de crema"],
opcion3: [1.6, "Heladix"],
opcion4: [1.7, "Heladovich"],
opcion5: [1.8, "Helardo"],
opcion6: [2.9, "helado con confites o un pote de 1/4kg"]
}

for (x = 1; x < 4; x++){
let cantidad = prompt("cuanto dinero tenes?");
for (i = 1; i < 7; i++){
	if (cantidad >= opcion[[i][0]]){
		var comprar = `podes comprar ${opcion[[i][1]]} que cuesta $${opcion[[i][0]]}`;
	}
}
}

console.log(comprar);