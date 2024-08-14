import { data } from "./data.mjs";
import mensaje  from "./hola_mundo.mjs";

console.log(data);
console.log(mensaje);

// Importación dinámica
import('./despedida.mjs').then((modulo) => {
  console.log(modulo.despedida);
  modulo.despedidaFunc();
});
