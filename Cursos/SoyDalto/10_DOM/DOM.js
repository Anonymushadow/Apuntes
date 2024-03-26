//metodos de selecion
//parrafo = document.getElementById("x");
//document.write("1 " + parrafo + "<br>");

//parrafo = document.getElementsByTagName("p");
//document.write("2 " + parrafo + "<br>");

//parrafo = document.getElementsByTagName("p");
//document.write("3 " + parrafo[0] + "<br>");

//parrafo = document.querySelector("p");
//document.write("4 " + parrafo + "<br>");

//parrafo = document.querySelectorAll(".h");
//document.write("5 " + parrafo + "<br>");

//parrafo = document.querySelectorAll("p");
//document.write("6 " + parrafo[2] + "<br>");


const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","text");

//let x = rangoEtario.getAttribute("type");
//document.write(x);

rangoEtario.removeAttribute("type");

//selector por clases (class)
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");

//selector por dir
const dir = document.querySelector(".dir");
dir.setAttribute("dir","rtl");

//tabIndex
const tabindex = document.querySelector(".tabIndex");
tabindex.setAttribute("tabIndex","0");

//title
const title = document.querySelector(".titulo");
title.setAttribute("title","javascript linea 43 y 44");


//inputs

let input = document.querySelector(".input-normal");
document.write("<br>" + input.className + "<br>");

let input2 = document.querySelector(".input-normal2");
document.write(input2.value + "<br>");

let input3 = document.querySelector(".input-normal3");
document.write(input3.type = "password");

let input4 = document.querySelector(".input-normal4");
input4.accept = "image/png";

//podes simplemente escribirlo sin el document.write

const input5 = document.querySelector(".input-normal5");
input5.minLength = "5";
input5.style.color = "white";
input5.style.backgroundColor = "#32b";


let tituloAModificar = document.querySelector(".titulo2");
tituloAModificar.style.color = "red";
tituloAModificar.classList.add("Grande");
//tituloAModificar.classList.remove("Grande");
//let valor = tituloAModificar.classList.item(0);
//document.write("<br>" + valor);

//tituloAModificar.classlist.toggle("Grande");
//valor = tituloAModificar.classlist.contains("Grande");
//document.write("<br>" + valor);

//tituloAModificar = document.querySelector(".titulo2");
//tituloAModificar.classlist.replace("titulo2","Grande");

let resultado = tituloAModificar.textContent
document.write("<br>" + resultado);


//createElement se añade elementos en MAYUSCULA
const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");
console.log(item);

const texto = document.createTextNode("este es un  item de la lista");
console.log(texto);

item.appendChild(texto);
console.log(item);

contenedor.appendChild(item);


const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++){
	const item = document.createElement("LI");
	item.innerHTML = "este es un item nuevo " + i;
	fragmento.appendChild(item); 
}
contenedor.appendChild(fragmento);

let primerHijo = contenedor.firstChild;
let ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo);
console.log(primerHijo);
primerHijo = contenedor.firstElementChild;
ultimoHijo = contenedor.lastElementChild;
console.log(ultimoHijo);
console.log(primerHijo);
let hijos = contenedor.childNodes;
console.log(hijos);
hijos = contenedor.children;
console.log(hijos);

const parrafo2 = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "titulo";
h2_antiguo = document.querySelector(".h2");
contenedor.replaceChild(h2_nuevo,h2_antiguo);

let h4 = document.querySelector(".h4");
contenedor.removeChild(h4);

let child = contenedor.hasChildNodes();
document.write("<br>" + child);

console.log(h2_nuevo.parentElement);


console.log(h2_nuevo.nextSibling);

console.log(h2_nuevo.lastSibling);

let x = document.querySelector("p");
console.log(x.closest(".h3"));


