const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
function inscribir(alumno,materia){
	let personas = materias[materia];
	personas.shift();
	alumnos = personas;
	if (alumno.length >= 20) {
		document.write("la materia esta llena")
	}else{
		document.write("estas inscrito correctamente")
	}
}

inscribir("pedro","fisica");