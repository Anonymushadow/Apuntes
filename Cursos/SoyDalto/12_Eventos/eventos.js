//modo 1

const evento = document.querySelector(".evento");

evento.addEventListener("click", despedir);

function despedir(){
	alert("adios");
}

//modo2

const div = document.querySelector(".div");

div.addEventListener("click", (e)=>{
	alert("esto es un div");
	console.log(e.target);
},true);


const parrafo2 = document.querySelector(".parrafo2");

parrafo2.addEventListener("click", saludar);

function saludar(){
	alert("buenos dias");
	parrafo2.removeEventListener("click", saludar);
};


const p = document.querySelector(".p");
const div2 = document.querySelector(".div2");
const boton = document.querySelector(".boton");

p.addEventListener("click", (x)=>{
	alert("parrafo");
	x.stopPropagation();
});

//div2.addEventListener("click", (x)=>{
//	alert("div2");
//});

//boton.addEventListener("click", (b)=>{
//	alert("boton");
//});

boton.addEventListener("dblclick", ()=>{
	alert("no tan rapido speedy gonzalez...");
});

let input = document.querySelector(".input");
let img = document.querySelector(".img");

img.addEventListener("error",()=>{
	console.log("ha sucedido un error");
} )

addEventListener("load",()=>{
	console.log("ha cargado el sitio");
} )

addEventListener("beforeunload",()=>{
	console.log("te estas por ir del sitio");
} )

addEventListener("unload",()=>{
	console.log("bienvenido al sitio");
} )

addEventListener("resize",()=>{
	console.log("modificaste el tamaño");
} )

addEventListener("scroll",()=>{
	console.log("hiciste scroll");
} )

let seleccionado = document.querySelector(".seleccionado");
input.addEventListener("select", (e)=>{
let start = e.target.selectionStart;
let end = e.target.selectionEnd;
let textoCompleto = input.value;
seleccionado.innerHTML = textoCompleto.substring(start, end);

})

input.addEventListener("keyup", (e)=>{
	let tecla = e.key;
let nuevoContenido = "la ultima tecla en ser presionada fue " + tecla;
seleccionado.innerHTML = nuevoContenido;

})

setTimeout(()=>{
	alert("hola");
},5000);

const intervalo = setInterval(()=>{
	console.log("hola");
},2000);

setTimeout(()=>{
	clearInterval(intervalo);
},10000);


