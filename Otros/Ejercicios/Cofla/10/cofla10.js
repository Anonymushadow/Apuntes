// //meter numeros random
// //meter nota final (promedio)
const materiasHTML = document.querySelector(".materias");

const materias = [{
	nombre: "Quimica",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Matematicas",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Lengua",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Historia",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Ingles",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Tecnologia",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
},{
	nombre: "Ed. Fisica",
	nota: Math.floor(Math.random() * (11 - 1)) + 1
}];

const obtenerMateria = (id)=> {
	return new Promise((resolve, reject)=>{
		materia = materias[id];
		if (materia == undefined) {
			reject("hubo un error");
		}else{
			setTimeout(()=>{resolve(materia)},Math.random()*1400);
		}
	})
}

const devolverMaterias = async ()=>{
	let materia = [];
	for (let i = 0; i < materias.length; i++) {
		materia[i] = await obtenerMateria(i);
		let newHTMLCode = `
		<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>`;
	materiasHTML.innerHTML += newHTMLCode;
	}
};

devolverMaterias();