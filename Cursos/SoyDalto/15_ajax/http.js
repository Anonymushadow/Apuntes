//http es una peticion que enviamos a un servidor que nos devuelve una informacion
//nuestro navegador es el cliente  el servidor es quien procesa la info
//cliente es toda la info a la que puede acceder el usuario 
//las peticiones http no guarda informacion
let objeto = {
	"variable1" : "pedro",
	"variable2" : "jorge"
};

console.log(objeto);

//json son datos estructurados
//serializar (pasado a sting)
serializado = JSON.stringify(objeto);
console.log(serializado);

//deserializar (pasarlo a JSON, deshacer el string)
deserializado = JSON.parse(serializado);
console.log(deserializado);

//XMLHttpRequest = hacer peticiones
//si existe (en chrome existe), se crea la peticion
if (window.XMLHttpRequest) { 
    peticion = new XMLHttpRequest;
    console.log(peticion); 
} else {
	peticion = new ActiveXObject("Microsoft.XMLHTTP");
    console.log(peticion); 
}
//en caso de que no exista (en internet explorer), se utiliza el ActiveXObject


//Get
let porcentaje = 25;
//Metodo 1
peticion.addEventListener("readystatechange", ()=> {
	console.log(`cargando ${porcentaje}%`);
	porcentaje = porcentaje + 25;
	if (peticion.readyState == 4 && peticion.status == 200) {
		console.log(peticion.response);
	}
});

//Metodo 2 (mas efectivo)
peticion.addEventListener("load", ()=>{
	let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "lo siento pero hubo un error";
    // console.log(JSON.parse(respuesta).Nombre);
});
//si no deserializo al archivo entonces se ve como un string y o puedo ponerle el .Nombre

peticion.open("Get", "info.txt");
peticion.send();


// // Post
peticion.addEventListener("load", ()=>{
 if (peticion.status == 200 || peticion.status  == 201) respuesta = peticion.response;
 else respuesta = "lo siento pero hubo un error";
 console.log(JSON.parse(respuesta));
});

peticion.open("Post", "https://reqres.in/api/users?page=2");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");

peticion.send(JSON.stringify(
{
    "name": "morpheus",
    "job": "leader"
}));

