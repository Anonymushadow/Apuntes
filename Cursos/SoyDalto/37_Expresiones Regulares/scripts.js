"use strict";
// las expresiones regulares sirven para validar cosas

// /patron/
//inicio-patron-final-bandera


// / = iniciar expresion regular
//  = que buscar
// / = terminar expresion a buscar
// g = no te detengas hasta que termine el texto
// i = ignorar mayusuclas y minusculas



const text = document.querySelector(".txt").textContent;
let reg = /lorem/gi;

console.log(reg.test(text));

// . = definir un comodin (cualquier caracter en ese patron)
// . = es para cuando no sabemos que iria en esa parte, x ejemplo
// /lo..m = va a seleccionar lorem, lomem, lonam, etc

// \ = lo que sigue es lo que escribi especicamente, que no signifique lo que significa la expresion
// [] = para selecionar caracteres o numeros especificos ([aq4] = selecciona las a, las q y los 4)

// - = seleccionar un rango 
//[a-l] = selecciona todas las letras desde la a hasta la l 
//(siempre toma de referencia los ascii para el orden)
// [a-eou] = de la a a la e, la o y la u

// () = seleccionar un numero de mas de una cifa
// (12)
// | = y (se pueden poner cuantos se quieran)

// los espacion son tomados




// ^ = no puede haber nada antes 
// $ = no puede haber nada depues

// {} = tiene que aparecer la cantidad exacta de veces
// {n} = el numero de veces
// {n, m} = desde hasta (incluyendo)
// {n,} = como minimo n veces y sin maximo
// * = puede estar, no estar, repetirse
// l* = puede haber una l, puede ser que no haya y se puede repetir

// ? = lo que viene antes puede estar pero solo una vez
// f? = puede estar o no estar la f pero no puede haber mas de uno

// + = tiene que haber como minimo uno

// \s = espacio, tabulacion, etc 
// \S = no admite espacio

// \d = admite solo numeros 
// \D = no admite numeros

// \w = admite solo letras y guion bajo
// \W = no admite ni letras ni guion bajo


reg = /^[\w]+@[\w]+\.[\w]+(\.[\w]+)?$/gi;

console.log(reg.test(text));
console.log(reg.exec(text));
console.log(reg.toString(text));


// \d\d\d\s  = numero numero numero espacio
// \w+?  = letra o numero una vez minimo 




let mail = /[a-zA-Z-0-9._-]+@{1}[a-z]{1,10}.[a-z]{1,5}/gi;


