const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}

function info(materia){
	
 if (materias[materia] !== undefined) {
 	return [materias[materia],materia,materias];
 }else{
   return materias;
 }
}

function mostrarInfo(materia){
	let informacion = info(materia);

 if (informacion !== false) {
 	let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();

 	document.write(`<br> <b> ${informacion[1]} <b> <br> <b> Profesor: <b> ${profesor} <br> <b> Alumnos: <b> <br> ${alumnos} <br><br>`);
 }

 Clases = (alumno)=>{
    let informacion = info();
 	let clasesPresentes = [];
	let cantidad = 0;
 	for(info2 in informacion){
 		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
 	return cantidad;
 }
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

document.write(Clases("tomas"));