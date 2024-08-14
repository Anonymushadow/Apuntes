//importamos el modulo y almacenamos la funcion en si
const saludo = require("./1_modulos/1_unica_funcion.js");

//importamos un objeto con varias funciones
const mundo = require("./1_modulos/2_varias_funciones.js");

//otro modo de importar
const { despedirMundo } = require("./1_modulos/2_varias_funciones.js");

console.log(saludo.saludar("Freecodecamp"));
console.log(mundo.saludarMundo());
console.log(mundo.despedirMundo());
console.log(despedirMundo());
