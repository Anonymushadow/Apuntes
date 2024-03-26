const sendButton = document.getElementById("snd-nota");
let resultado, mensaje;
sendButton.addEventListener("click", ()=>{
	try{
		prevRes = pareInt(document.getElementById(`nota`).value);
		if (isNaN(prevRes)) {
			throw "gracioso"
		}
		mensaje = definirMensaje(prevRes);
		resultado = verificarAprobacion(prevRes);
	} catch(e) {
		resultado = "Error";
		mensaje = "sos  un hacker";
	}
	abrirModal(resultado, mensaje);
});

const definirMensaje = (pr)=> {
	switch (pr) {
		case 1: resultado = "no podes ser tan malo"
		break; 
		case 2: resultado = "dos antes que uno"
		break; 
		case 3: resultado = "tres patadas en el c*lo"
		break; 
		case 4: resultado = "por dos"
		break; 
		case 5: resultado = "esta mal pero no esta tan mal"
		break; 
		case 6: resultado = "justo"
		break; 
		case 7: resultado = "mejor que lo minimo requerido"
		break; 
		case 8: resultado = "bien"
		break; 
		case 9: resultado = "casi jaja"
		break; 
		case 10: resultado = "nada mal"
		break; 
		default: resultado = null;
	}
	return resultado;
}

const verificarAprobacion = (prevRes) => {
	nota1 = 8;
	nota2 = 5;
	promedio = (nota1 + nota2 + prevRes) / 
}

const abrirModal = (res, msg) => {
	console.log(res);
	console.log(msg);
}