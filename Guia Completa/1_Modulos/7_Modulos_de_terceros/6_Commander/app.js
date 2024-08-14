const { program } = require('commander');

//definir una verison para el comando
program.version('1.0.0');

//definir una descripcion
program.description('Una aplicación de línea de comandos simple');

//añadir un comando 
program
  .command('saludar <nombre>')
  .description('Saluda a alguien')
  .action((nombre) => {
    console.log(`Hola Mundo!`);
  });

//añadimos opciones
program.options('-v, --verbose', 'Muestra mensajes detallados');

//añadimos una verificaicon de argumentos
program.parse(process.argv);
if (program.verbose) {
  console.log('Modo verbose activado');
}


//añadir opciones obligatorias
program.requiredOption('-e, --email <email>', 'Correo electrónico');


//analizar los argumentos de manera asincrona
program.parseAsync(process.argv).then(() => {
  console.log('Argumentos analizados con éxito.');
});
