console.log('Inicio');

process.nextTick(() => {
  console.log('Esta función se ejecutará en la próxima iteración del bucle de eventos.');
});

console.log('Fin');

// Resultado esperado:
// Inicio
// Fin
// Esta función se ejecutará en la próxima iteración del bucle de eventos.
