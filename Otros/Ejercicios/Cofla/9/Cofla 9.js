let boton = document.getElementById(`snd-nota`);
let notaFinal;
let trabajoUno = 8;
let trabajoDos = 3;

boton.addEventListener("click", ()=>{
let nota = document.getElementById(`nota-alumno`).value;
if (nota < 1 || nota > 10 || isNaN(nota)) {
	console.log("nota erronea");
} else {
	console.log(trabajoUno);
	console.log(trabajoDos);
	console.log(nota);
	notaFinal = (trabajoUno + trabajoDos + parseInt(nota))/3;
    console.log(notaFinal);
    if (notaFinal < 7) {
    	console.log("este alumno esta desaprobado");
    } else {
    	console.log("este alumno esta aprobado");
    }
}
});


