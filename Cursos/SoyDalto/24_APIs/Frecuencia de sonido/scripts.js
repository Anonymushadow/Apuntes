"use strict";


const iniciar = ()=>{
	try{
		window.AudioContext = window.AudioContext || window.webKitAudioContext;
		context = new AudioContext();
		}catch(e){
			alert("la api no funciona");
		}
}

const iniciarFrecuencia = ()=>{
	osc = context.createOscillator();
	osc.frequency.value = document.querySelector(".range").value;
	osc.connect(context.destination);
	osc.start(0);
}

const cambiarFrecuencia = ()=>{
	osc.frequency.value = document.querySelector(".range").value;
	let range = osc.frequency.value;
	document.querySelector(".interfaz").innerHTML = range + "Hz";
}


window.addEventListener("load", iniciar);
document.querySelector(".iniciar").addEventListener("click", iniciarFrecuencia);
document.querySelector(".range").addEventListener("change", cambiarFrecuencia);
