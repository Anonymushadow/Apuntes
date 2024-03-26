let entrada = true;

function validar(horario){
   let edad = prompt("¿cual es tu edad?");
if (edad >= 18) {	
	if (horario >= 2 && entrada == true) {
		alert("usted puede pasar gratis");
		entrada = false
	}else{
	alert("puede pasar pero tiene que pagar");
    }
}else{
	alert("usted no puede pasar porque es menor de edad");
}
}


validar(9);
validar(10);
validar(11);
validar(12);
validar(1);
validar(2);
