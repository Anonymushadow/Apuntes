const readline = require("readline");


//creamos la interfaz para recibir y enviar datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//enviamos un mensaje al usuario y esperamos su respuesta
rl.question('¿Cuál es tu nombre? ', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    rl.close();
  });

//detectar cuando se ingrersa una linea y presiona enter
rl.on('line', (input) => {
    console.log(`Has ingresado: ${input}`);
  });

//detectar cuando se ceirra el readline (con .close())
rl.on('close', () => {
    console.log('La interfaz readline se ha cerrado.');
  });

//detectar cuando el usuario presiona Ctrl+C para interrumpir la aplicación
rl.on('SIGINT', () => {
    console.log('La aplicación ha sido interrumpida.');
    process.exit(0); 
  });
  
  
  
