//una api es cualquier funcionalidad de los lenguajes
//yo escribo alert y sale una alerta pero no sabemos que es lo que pasa internamente, eso es una api, el proceso ese


//objeto DATE
let fecha = Date();
//si pongo un numero en el parentesis significa que va a tomar de referecia los milisegundos que transcurren desde el uno de enero del 1970
//tmabien se le puede poner año, mes y dia de la semana
console.log(fecha);

fecha = new Date();

console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getYear());
console.log(fecha.getYear()+1900);
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

