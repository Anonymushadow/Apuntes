let cadena = "  cadena de prueba no no no no  ";
let cadena2 = "cadeNa segunDa";
let array = ["pedro","maria","jorge",4,5,2,6,2,1];
let array2 = ["pedro","maria","jorge","x","no",2,6,2,1];

//.concat
//.startsWith
//.endsWith
//.include
let resultado = cadena.concat(cadena2);
let resultado2 = cadena.startsWith(cadena2);
let resultado3 = cadena.endsWith(cadena2);
let resultado4 = cadena.includes("de");
let resultado5 = cadena.indexOf("prueba");
let resultado6 = cadena.lastIndexOf("no");
let resultado7 = cadena.padStart(50, "1");
let resultado8 = cadena.repeat(10);
let resultado9 = cadena.split(" ");
let resultado10 = cadena.substring(0,5);
let resultado11 = cadena2.toLowerCase();
let resultado12 = cadena2.toUpperCase();
let resultado13 = cadena.trimStart();
let resultado14 = cadena.trimEnd();
let resultado15 = cadena.trim();

let resultado16 = array.pop();
let resultado17 = array.shift();
let resultado18 = array.push("robert","thomas","x");




document.write(resultado + "<br>");
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");
document.write(resultado4 + "<br>");
document.write(resultado5 + "<br>");
document.write(resultado6 + "<br>");
document.write(resultado7 + "<br>");
document.write(resultado8 + "<br>");
document.write(resultado9 + "<br>");
document.write(resultado10 + "<br>");
document.write(resultado11 + "<br>");
document.write(resultado12 + "<br>");
document.write(resultado13 + "<br>");
document.write(resultado14 + "<br>");
document.write(resultado15 + "<br>");

document.write(resultado16 + "<br>");
document.write(array + "<br>");
document.write(resultado17 + "<br>");
document.write(array + "<br>");
document.write(resultado18 + "<br>");
document.write(array + "<br>");
let resultado19 = array.reverse();

document.write(resultado19 + "<br>");
let resultado20 = array.unshift("hola");
let resultado21 = array.sort();
document.write(resultado20 + "<br>");
document.write(resultado21 + "<br> <br>");

//.splice
let resultado22 = array2.splice(5,1,"9","9","9");
document.write(array2 + "<br>");

//.join
let resultado23 = array2.join("<br>");
document.write(resultado23 + "<br>");

//.slice
let resultado24 = array2.slice(0,4);
document.write(resultado24 + "<br> <br> <br>");


//.forEach
array2.forEach( numero => document.write(numero + "<br>"));

//.filter
document.write("---------- <br>");
resultado25 = array2.filter(numero => numero.length > 4);
document.write(resultado25);
document.write("---------- <br>");