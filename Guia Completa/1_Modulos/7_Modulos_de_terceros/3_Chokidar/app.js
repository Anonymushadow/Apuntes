const chokidar = require("chokidar");

//observar una ruta e ignorar el node_modules
const watcher = chokidar.watch(["ruta1", "ruta2"], { ignored: /node_modules/ });

//en caso de escuchar el evento add devuelve la ruta del archivo añadido
watcher.on("add", (path) => {
  console.log(`Archivo agregado: ${path}`);
});

//dejar de observar rutas
watcher.unwatch("ruta1");

//cerrar el observador de rutas
watcher.close();

//ver que archivos esta observando el watcher
watcher.getWatched();

//añadir rutas a observar a un watcher ya creado
watcher.add("ruta3");

//escritura unificada
watcher
  .on("addDir", (path) => log(`Directory ${path} has been added`))
  .on("unlinkDir", (path) => log(`Directory ${path} has been removed`))
  .on("error", (error) => log(`Watcher error: ${error}`))
  .on("ready", () => log("Initial scan complete. Ready for changes"))
  .on("raw", (event, path, details) => {
    log("Raw event info:", event, path, details);
  });
