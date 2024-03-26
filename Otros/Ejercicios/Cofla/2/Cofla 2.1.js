let cantidad = prompt("¿cuantos alumnos son?");
let alumnos = [];

for (var i = 0; i < cantidad; i++) {
 	alumnos[i] = [prompt("Nombre del alumno " + (i + 1)),0]; 
 } 

 

 function asistencia(nombre, p){
 	let presencia = prompt(nombre);
 	if (presente == "p" || presente == "P") {
 		alumnos[i][1]++;
 	}

 for (i = 0; i < 30; i++){
 	for(x in alumnos){
 		asistencia(alumnos[x][0], alumnos);
 	}
 }

for (x in alumnos){
	let resultado =`${alumnos[x][0]}: <br>
	______ asistencias: ${alumnos[x][1]}  <br>
	______ ausencias:  ${30 - parseint(alumnos[x][1])}`;

	if(30 - alumnos[x][1] > 18){
		resultado = "estas reprobado <br><br>";
	}else{
		resultado = "<br><br>"
	}
	document.write(resultado);
}