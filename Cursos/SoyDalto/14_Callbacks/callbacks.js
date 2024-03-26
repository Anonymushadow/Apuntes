//agarra funcion prube y de parametro le 
//da la funcion decirNombre, decirNombre
//agarra de parametro al callback de prueba

function prueba(callback){
	callback("pedro");
}

function decirNombre(nombre){
	console.log(nombre);
}

prueba(decirNombre);


//es lo mismo que hacer :
//prueba(function decirNombre(nombre){
//	console.log(nombre);
//});

//o tambien:
//prueba(nombre => console.log(nombre));



class persona {
	constructor(nombre, instagram){
	this.nombre = nombre;
	this.instagram = instagram;
	}
}

const data = [
["Lucas Dalto", "@Soydalto"],
["robertico", "@Robertico"],
["Rancio Ramirez", "@RancioRamirez"],
["camila Nesa", "@Milanesa"]
];

const personas = [];

for (var i = 0; i < data.length; i++) {
	personas[i] = new persona(data[i][0], data[i][1]);
};

console.log(personas[0].nombre);



//function obtenerPersona(id, cb){
//	if (personas[id] == undefined) {
//		cb("no se ha encontrado la persona");
//	} else {
//		cb(null,personas[id].nombre);
//	}
//}

//function obtenerInstagram(id, cb){
//	if (personas[id].instagram == undefined) {
//		cb("no se ha encontrado el instagram");
//	} else {
//		cb(null,personas[id], id);
//	}
//}

//el 1 es la persona seleccionada (la persona en la
//posicion 1 del array)

//obtenerPersona(1, (err, persona)=> {
//	if (err) {
//		console.log(err);
//	} else {
//		console.log(persona.nombre);
//		console.log(obtenerInstagram(id, (error, persona)=>{
//			if (err) {
//		console.log(err);
//	} else {
//		console.log(instagram);
//	}
//		}));
//	}
//})




// promesas = reduce todo el codigo del callback
// resolve = si sale todo bien
// reject = si  hay un error

let nombre = "pedrro"; 

const promesa = new Promise((resolve, reject) => {
	if (nombre !== "pedro") {
		reject("lo siento, el nombre no es Pedro");
	} else {
		resolve(nombre)
	}
});


promesa.then((resultado)=>{
	console.log(resultado);
}).catch((e)=>{
	console.log(e);
});