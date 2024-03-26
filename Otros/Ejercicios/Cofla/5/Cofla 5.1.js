//30 minutos casa
//103 minutos 
//100 minutos estudiar
//240 minutos trabajo
//10 minutos descanso

let trabajosDeCasa = "30 minutos de trabajos de casa";
let trabajo = "240 minutos de trabajar";
let estudio = "100 minutos de estudiar";
let descanso = "10 minutos de descanso";
let trabajosEscuela = "100 minutos de trabajos escolares";
let num = 1;

for (i = 0; i <14; i++){
	if (i == 0) {
		console.count();
		console.groupCollapsed("Semana 1");	
	}
	if (i == 7) {
		num = 1;
		console.countReset();
		console.groupEnd();
		console.groupCollapsed("Semana 2");
	}
console.groupCollapsed("dia " + num++);
	console.log(trabajo);
	console.log(trabajosDeCasa);
	console.log(estudio);
	console.log(descanso);
	console.log(trabajosEscuela);
console.groupEnd();
}

