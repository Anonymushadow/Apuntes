const mensaje = "¡Hola desde mi módulo!";

function saludar() {
  console.log(mensaje);
}

//exporto la funcion saludar
module.exports = { saludar };