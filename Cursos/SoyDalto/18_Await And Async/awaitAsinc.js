const objeto = {
	propiedas1: "valor1",
	propiedad2: "valor2",
	propiedad3: "valor3"
};

const obtenerInformacion = ()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(objeto)
		},3000)
	})
}

obtenerInformacion().then(resultado => console.log(resultado));

// await =
// async =

// funcion asincrona 
// opcion 1:
// aync function nombreDeFuncion(){

// }

// opcion 2:
// const nombreDeFuncion = async ()=>{

// }


// const  mostrarResultado = async ()=>{
// 	resultado = await obtenerInformacion();
// 	console.log(resultado);
// }

// mostrarResultado();

const obtenerInformacion2 = (text)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=> {resolve(text)}, Math.random()*200)
	})
}

const mostrarData = async ()=>{
	data1 = await obtenerInformacion2("1: primero");
	data2 = await obtenerInformacion2("2: segundo");
	data3 = await obtenerInformacion2("3: tercero");
	console.log(data1);
	console.log(data2);
	console.log(data3);
}

mostrarData();