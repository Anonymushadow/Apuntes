let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let compra = confirm(`estas seguro que queres comprar esta computadora con un ancho de ${ancho} y un alto de ${alto}?`);
if (compra) {
	alert("compra realizada correctamente");
}else{
	alert("compra rechazada");
}

document.write(compra)