//verificamos que hayan 2 argumentos (los primero dos son node y nombre_del_archivo.js)
if (process.argv.length == 4) {
  console.error("Se espera un argumento");
  process.exit(1);
}

//obtenemos los flags (ciertos datos que en caso de estar ahi los usamos como comandos especiales)
if (process.argv[2] === "-f") {
  console.log("Ejecutando codigo especial");
} else {
  console.log("Codigo simple");
}

//verificamos si hay flags (flags puede ser cualquiera pero es comun poner -letra)
const flag = process.argv.indexOf("-f") > -1 ? "Flag is present." : "Flag is not present.";
