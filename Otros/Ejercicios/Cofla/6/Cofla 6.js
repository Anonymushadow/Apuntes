//cofla 6
// []
//  ``

const contenedor = document.querySelector(".flex-container");


function llave(nombre,modelo,precio){
	img = `<img src="llave.png"` + "<br>";
	nombre = `<h2> ${nombre} <h2>`;
	modelo = `<h3 id="${modelo}"> ${modelo} <h3>`;
	precio = `<p> precio:<b> ${precio} <b> <p>`;
	return [img, nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();


for (var i = 1; i <= 20; i++){
	let precioRandom = Math.round(Math.random()*10 + 30);
	let modeloRandom = Math.round(Math.random()*9388);
	let llaves = llave(`llave ${i}`, `modelo: ${modeloRandom}`, `precio:${precioRandom}`);
	let div = document.createElement("DIV");
	div.classList.add(`item-${i}`, "flex-item");
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
