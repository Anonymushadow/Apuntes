"use strict"

let caja;
let entry;

const cajas = document.querySelectorAll(".caja");
//se trata de ver, cuando ves algo ejecuta otra coas... Scroll and show
// const verificarVisibilidad = (entries) =>{
// 	const entry = entries[0];
// 	//aca solo se toma en cuenta una caja, un elemento
// 	console.log(entry);
// }
// // esto nos devuelve entradas en frma de array



const verificarVisibilidad = (entries) =>{
	for (entry of entries) {
		if (entry.isIntersecting) {
			console.log("se esta viendo la caja:", entry.target.textContent);
		}
	}
}

const options = {
	rootMargin: "0px",
	treshold: 0
};
//root = que toma de referencia para decir si se esta viendo o no (por defecto es el viewport)
//rootmargin se pone un margin para sber si se pone true enseguida aparezca o si tiene que verse mas o menos
//treshold[0,5]  a que altura queres que se vea, si queres que se vea apenas hay contato (0), si queres que se vea toda la figura (1), etc

const observer = new IntersectionObserver(verificarVisibilidad, options);
//recide dos parametros:un callback y opciones


for (caja of cajas) {
	observer.observe(caja);
}