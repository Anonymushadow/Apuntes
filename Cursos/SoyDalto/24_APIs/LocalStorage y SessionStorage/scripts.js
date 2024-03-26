//local y session son la misma pero con una sola diferencia
//sessionStorage almacena informacion pero al reinicciar, o cerrar la pagina se pierde toda la info
//localStorage guarda informacion incluso cuando se ciera la pagina

localStorage.setItem("nombre", "pedro");//guarda una variable con pedro ahi dentro

//localStorage.length devuelve la cantidad de keys que tiene
console.log(localStorage);

sessionStorage.setItem("nombre", "pablo");

let nombre = sessionStorage.getItem("nombre");


console.log(nombre);

setTimeout(()=>{
	sessionStorage.removeItem("nombre");
},2000);

setTimeout(()=>{
	localStorage.clear();
},2000);

