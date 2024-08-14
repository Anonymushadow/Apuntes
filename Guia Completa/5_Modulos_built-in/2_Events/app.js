const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

//funcion para cuando se ejecute el evento
const manejarEvento = () => {
    console.log("started");
}

//al escuchar el evento start va a escribir por consola
eventEmitter.on("start", manejarEvento);

//despues de 5 segundos vamos a ejecutar el evento start (tambien podemos enviar aprametros "start", parametro...)
setTimeout(() => {
  eventEmitter.emit("start");
}, 5000);

//once
miEmitter.once("miEvento", () => {
  console.log(
    'Este mensaje se mostrará solo la primera vez que se emita "miEvento".'
  );
});

miEmitter.emit("miEvento"); // Este manejador se ejecutará
miEmitter.emit("miEvento"); // Este manejador no se ejecutará


//eliminar evento (con cualquier opcion funciona)
//en si no elimina el evento, si no la funcionalidad que ejecuta al recibir el evento
//miManejador seria la funcion que ejecuta el evento al 
miEmitter.off('miEvento', miManejador);
miEmitter.removeListener('miEvento', miManejador);


//eliminar todas las acciones relacionadas a un evento
eventEmitter.removeAllListeners("miEvento");