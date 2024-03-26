//
//asistencia
//promedio
//trabajos (4 = 100%)
let aprobacion;
let materias = {
	fisica: [90,6,3,"Fisica"],
	matematicas: [84,5,4,"Matematicas"],
	tecnologia: [92,3,2,"Tecnologia"],
	lengua: [96,4,4,"Lengua"],
	ingles: [91,7,3,"Ingles"],
	biologia: [79,6,2,"Biologia"],
	quimica: [75,9,4,"Quimica"]
}

for (materia in materias) {
	let asistencias = materias[materia][0];
	let promedio = materias[materia][1];
	let trabajos = materias[materia][2];

if (asistencias > 89 && promedio > 5 && trabajos > 2) {
	console.log(`${materias[materia][3]}: %cAprobado`,"color:green;" + "<br>");
    aprobacion = true;
	}else{
		console.log(`${materias[materia][3]}: %cDesaprobado`,"color:red;" + "<br>");
		aprobacion = false;
	}

	if (aprobacion == false) {
		if (asistencias < 90) {
			console.log("%ctus asistencias no son suficientes","color:red;")
		}
		if (promedio < 6) {
			console.log("%ctu promedio no es suficiente","color:red;")
		}
		if (trabajos < 3) {
			console.log("%ctus trabajos entregados no son suficientes","color:red;")
		}
	}
}
