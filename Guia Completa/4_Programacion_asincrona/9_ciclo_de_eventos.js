console.log("Inicio del programa");

// Fase 1: Timers
setTimeout(function () {
  console.log("Temporizador ejecutado");
}, 100);

// Fase 2: Pending Callbacks
process.nextTick(function () {
  console.log("nextTick ejecutado");
});

// Fase 3: Idle, Prepare (no se usa en aplicaciones normales)

// Fase 4: Poll
const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("Lectura de archivo completada");
});

// Fase 5: Check
setImmediate(function () {
  console.log("setImmediate ejecutado");
});

// Fase 6: Close Callbacks (no se muestra en este ejemplo)

console.log("Fin del programa");
