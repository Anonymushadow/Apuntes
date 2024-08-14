var localVariable = "Soy una variable local";
global.globalVariable = "Soy una variable global";

function myFunction() {
  console.log(localVariable); // Puedes acceder a la variable local aquí
}

module.exports = myFunction;