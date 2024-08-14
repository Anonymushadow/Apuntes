const cliProgress = require("cli-progress");

// Crear un objeto de opciones personalizado
const customOptions = {
    format: 'Progreso [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u2588',  // Carácter que representa una parte completa de la barra
    barIncompleteChar: '\u2591',  // Carácter que representa una parte incompleta de la barra
    hideCursor: true,  // Ocultar el cursor en la consola durante la barra de progreso
    clearOnComplete: true,  // Borrar la barra de progreso después de completarse
    stopOnComplete: true,  // Detener automáticamente la barra de progreso después de completarse
    barsize: 40,  // Longitud de la barra de progreso
    fps: 10,  // Velocidad de actualización de la barra de progreso (fotogramas por segundo)
  };
  
  // Crear una nueva barra de progreso con las opciones personalizadas
  const progressBar = new cliProgress.SingleBar(customOptions);
  
  // Iniciar la barra de progreso con un valor total
  progressBar.start(100, 0);
  
  // Simular una tarea que avanza
  const interval = setInterval(() => {
    progressBar.increment(); // Incrementar la barra de progreso en 1
    if (progressBar.value >= progressBar.getTotal()) {
      clearInterval(interval);
      progressBar.stop();
    }
  }, 100);