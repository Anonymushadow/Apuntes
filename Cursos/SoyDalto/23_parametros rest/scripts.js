// el ...num crea un array donde almacena todos los valores ingresados por el usuario
const suma = (...num)=>{
	let resultado = 0;
	for(let i = 0; i < num.length; i++){
		resultado += num[i];
	}
	console.log(resultado);
}

suma(10, 50, 10);

//... siempre tiene que ser el ultimo parametro