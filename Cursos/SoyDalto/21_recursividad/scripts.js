//las funcions recursivas son funciones que se llaman a si misma
const validarEdad = (msg)=>{
	let edad;
	try {
		if (msg) edad = prompt(msg);
		else edad = prompt("introduce tu edad");
		edad = parseInt(edad);
		if (isNaN(edad)) throw "introduce una edad valida";
		if (edad < 18) console.log("sos menor de edad");
		else console.log("sos mayor de edad");
	}catch(e){
		validarEdad(e);
		//aca cada ves que algo sale mas se vuelve a llamar para reintentarlo
	}
}

validarEdad();
