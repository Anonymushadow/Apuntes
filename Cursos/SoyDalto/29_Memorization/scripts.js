"use strict";

// guarda informacion para que despues cargue mas rapido


let cache = [];

const memoizer = func =>{
	return e =>{
		const index = e.toString();
         //al array le pone como posicion el parametro de la funcion hecha texto, por ejemplo "2"
         if (cache[index] == undefined) {
         	cache[index] = func(e);
         } 
         return cache[index];
     }
 }

 const hacerAlgo = num => {
 	const a = 20;
 	const b = 12;
 	let c = 0;
 	for (let i = num - 1; i >= 0; i--) {
 		for (let j = i - 1; j >= 0; j--) {
 			c+= a*b;
 		}
 	}
 }
//usarlo para cuando sabemos que hay ciertos datos que se van a repetir para que se almacenen y no tengan que cargar de vuelta lo mismo

console.log("sin memoizer");

const date = new Date();
hacerAlgo(90000);
console.log(new Date() - date);

const memo = memoizer(hacerAlgo);

console.log("con memoizer");

const date2 = new Date();
memo(90000);
console.log(new Date() - date2);

const date3 = new Date();
memo(90000);
console.log(new Date() - date3);

const date4 = new Date();
memo(90000);
console.log(new Date() - date4);