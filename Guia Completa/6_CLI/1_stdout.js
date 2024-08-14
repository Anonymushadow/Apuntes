//escribir en consola
process.stdout.write("Hola, mundo\n");

//hacer algo cuando la estructura est alista para continuar 
process.stdout.on('drain', () => {
    console.log('La escritura se ha completado.');
  });

//acabar el cli
process.stdout.end("Adiós, mundo\n");

//definir la codificacion por defecto
process.stdout.setDefaultEncoding('utf-16');

// Pausar la lectura de stdin
process.stdin.pause(); 

// Reanudar la lectura de stdin
process.stdin.resume(); 

//recibir un input desde la consola
process.stdin.on('data', function(data) {
    process.stdout.write(`Escribiste: ${data.toString()}`);
    process.exit();
  });

//al recibir un evento ejecutar una funcion una unica vez
process.stdin.once('data', (data) => {
    console.log(`Entrada única recibida: ${data}`);
  });

//eliminar el detector de eventos 
process.stdin.removeListener('data', onData);

//enivar cualquier input como output
process.stdin.pipe(process.stdout);

//crear un descriptor de archivo
const stdoutFd = process.stdout.fd;

//escribir en consola con error
process.stderr.write("Hola, mundo\n");

//definimos que lo obsoleto tire excepciones
process.throwDeprecation = true;
