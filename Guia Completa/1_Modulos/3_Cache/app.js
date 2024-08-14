const data = require("./datos.cjs");

// Obtener el objeto del módulo específico en el caché (por ejemplo, el módulo './datos.cjs')
const cachedModule = require.cache[require.resolve("./datos.cjs")];
//para importar desde cache (exports es justamente el modulo en si)
const rutaEnCache = require.cache[require.resolve('./datos.cjs')].exports;
console.log("-------------------------------------------------------");
console.log("RUTA DEL CACHE");
console.log("-------------------------------------------------------");
console.log(rutaEnCache);

// Verificar si el módulo está en caché
if (cachedModule) {
  //eliminamos el modulo del cache
  delete require.cache[require.resolve('./datos.cjs')];
  console.log("eliminado");
} else {
    console.log("-------------------------------------------------------");
    console.log("MODULO INEXISTENTE");
    console.log("-------------------------------------------------------");
  console.log("El módulo no está en caché.");
}