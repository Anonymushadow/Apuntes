const yargs = require("yargs");

//-----------------------------------------------------------------------------------------
//COMANDO BASICO (COMMAND)
//-----------------------------------------------------------------------------------------
yargs.command(
  "saludar",
  "Saludar al usuario",
  (yargs) => {
    // Configura opciones específicas para el comando 'saludar' si es necesario
  },
  (argv) => {
    // Lógica para el comando 'saludar'
  }
);
//saludar es el nombre del comando a escribir para ejecutar la funcion esta
//Saludar al usuario es una descripción opcional que proporciona información sobre lo que hace este comando (esta se vera si ponen yargs.help())

//-----------------------------------------------------------------------------------------
//AÑADIR UNA CONFIGURACION PARA TODOS LOS COMANDOS EN COMUN (OPTIONS)
//-----------------------------------------------------------------------------------------
yargs.command(
  "saludar",
  "Saludar al usuario",
  (yargs) => {
    yargs.options("nombre", {
      //nombre es como un parametros  saludar --nombre pablo
      alias: "n", //permite definir un alias corto para la opción saludar -n pablo
      description: "Nombre del usuario", // Esta propiedad proporciona una descripción de la opción. La descripción se utiliza en la salida de ayuda generada por yargs.help() para explicar qué representa esta opción.
      demandOption: true, //indicamos que es un parametro obligatorio, si o si debe llevar nomrbe
    });
  },
  (argv) => {}
);

//-----------------------------------------------------------------------------------------
//AÑADIR PARAMETROS EN ORDEN ESPECIFICO (POSITIONAL)
//-----------------------------------------------------------------------------------------
yargs.command(
  "calcular",
  "Calcular el área de un rectángulo",
  (yargs) => {
    // Definir los argumentos
    yargs
      .positional("ancho", {
        describe: "Ancho del rectángulo", // Decripcion del parametro
        type: "number", // Tipo de argumento (número)
      })
      .positional("alto", {
        describe: "Alto del rectángulo",
        type: "number",
      })
      .positional("unidad", {
        describe: "Unidad de medida",
        type: "string",
      });
  },
  (argv) => {}
);

//-----------------------------------------------------------------------------------------
//AÑADIR UNA DESCRIPCION DE COMO SE USA EL COMANDO (USAGE)
//-----------------------------------------------------------------------------------------
yargs.command({
  command: "saludar",
  describe: "Saluda a alguien",
  builder: (yargs) => {
    return yargs.option("nombre", {
      describe: "Nombre de la persona a saludar",
      demandOption: true,
      type: "string",
    });
  },
  handler: (argv) => {},
  usage: "Uso: miapp saludar --nombre <nombre>",
});

//-----------------------------------------------------------------------------------------
//AÑADIR CONFIGURACION ESPECIFICA PARA UN COMANDO ESPECIFICO (BUILDER)
//-----------------------------------------------------------------------------------------
yargs.command({
  command: "saludar <nombre>",
  describe: "Saluda a alguien",
  builder: (yargs) => {
    return yargs.option("edad", {
      describe: "Edad de la persona a saludar",
      type: "number",
    });
  },
  handler: (argv) => {
    console.log(`¡Hola, ${argv.nombre}! Edad: ${argv.edad || "Desconocida"}`);
  },
});

//-----------------------------------------------------------------------------------------
//AÑADIR UNA OPCION DE AYUDA (HELP)
//-----------------------------------------------------------------------------------------
yargs
  .options({
    verbose: {
      describe: "Habilita mensajes detallados",
      type: "boolean",
    },
  })
  .command({
    command: "saludar <nombre>",
    describe: "Saluda a alguien",
    builder: (yargs) => {
      return yargs.option("edad", {
        describe: "Edad de la persona a saludar",
        type: "number",
      });
    },
    handler: (argv) => {
      if (argv.verbose) {
        console.log(`Modo detallado habilitado. Saludando a ${argv.nombre}...`);
      }
      console.log(`¡Hola, ${argv.nombre}!`);
    },
  })
  .help(); // Habilita el mensaje de ayuda

//-----------------------------------------------------------------------------------------
//AÑADIR UNA VERSION (VERSION)
//-----------------------------------------------------------------------------------------
yargs
  .options({
    verbose: {
      describe: "Habilita mensajes detallados",
      type: "boolean",
    },
  })
  .command({
    command: "saludar <nombre>",
    describe: "Saluda a alguien",
    builder: (yargs) => {
      return yargs.option("edad", {
        describe: "Edad de la persona a saludar",
        type: "number",
      });
    },
    handler: (argv) => {
      if (argv.verbose) {
        console.log(`Modo detallado habilitado. Saludando a ${argv.nombre}...`);
      }
      console.log(`¡Hola, ${argv.nombre}!`);
    },
  })
  .version("1.0.0")
  .help();

//-----------------------------------------------------------------------------------------
//AÑADIR UN MENSAJE DE AGRADECIMIENTO AL EJECUTAR LA AYUDA (EPILOGE)
//-----------------------------------------------------------------------------------------
yargs
  .options({
    verbose: {
      describe: "Habilita mensajes detallados",
      type: "boolean",
    },
  })
  .command({
    command: "saludar <nombre>",
    describe: "Saluda a alguien",
    builder: (yargs) => {
      return yargs.option("edad", {
        describe: "Edad de la persona a saludar",
        type: "number",
      });
    },
    handler: (argv) => {
      if (argv.verbose) {
        console.log(`Modo detallado habilitado. Saludando a ${argv.nombre}...`);
      }
      console.log(`¡Hola, ${argv.nombre}!`);
    },
  })
  .version("1.0.0")
  .epilogue("Gracias por usar mi aplicación.")
  .help();

//-----------------------------------------------------------------------------------------
//INDICAR QUE UNA OPCION ES OBLIGATORIO (DEMANDOPTION)
//-----------------------------------------------------------------------------------------
yargs.options({
  nombre: {
    describe: "Nombre de la persona",
    demandOption: true, // Esta opción es requerida
    type: "string",
  },
  edad: {
    describe: "Edad de la persona",
    demandOption: false, // Esta opción es opcional
    type: "number",
  },
});




//-----------------------------------------------------------------------------------------
//EJEMPLO FUNCIONAL PARA PROBAR
//-----------------------------------------------------------------------------------------
yargs.command(
  "prueba",
  "este es un ejemplo de prueba",
  (yargs) => {
    yargs.options("nombre", {
      alias: "-n", 
      description: "Aca recibe un nombre opcional",
      demandOption: false, 
    });
  },
  (argv) => {
    console.log("Esto funciona bien al parecer");
  }
)
.version("1.0.0")
.epilogue("Gracias por probarlo")
.help();
