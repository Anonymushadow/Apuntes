const path = require("path");

//crear ruta en base a strings sueltos
const ruta = path.join('carpeta', 'subcarpeta', 'archivo.txt');
console.log('Join: ' +  ruta);

//añadir a la ruta absoluta actual una ruta nueva (añadirlo al final del a ruta actual)
const rutaResolve = path.resolve('carpeta', 'subcarpeta', 'archivo.txt');
console.log('Resolve:', rutaResolve);


//eliminar puntos, puntos y comas, etc, simbolos extras que estorban (es como corregir la ruta escrita)
const rutaNormalize = path.normalize('carpeta/../../subcarpeta/./archivo.txt');
console.log('Normalize:', rutaNormalize);


//devuelve el directorio sin el archivo
const directorio = path.dirname('/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Directorio:', directorio);


//obtenemos solo el archivo de una ruta
const nombreArchivo = path.basename('/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Nombre del archivo:', nombreArchivo);


//obtenemos la extencion del archivo de un directorio
const extension = path.extname('/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Extensión del archivo:', extension);


//verificamos si la ruta es absoluta
const esAbsoluta = path.isAbsolute('/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Es ruta absoluta:', esAbsoluta);


//verificamos si la ruta es relativa
const relativa = path.relative('/ruta/carpeta', '/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Ruta relativa:', relativa);


//indica con quye se separa cada directorio y archivo en la ruta actual
console.log('Separador de ruta:', path.sep);


//demuestra en las variables de entorno mediante que simbolos estan divididas las rutas
console.log('Delimitador de ruta:', path.delimiter);


// separar la ruta y convertirla en un objeto
const rutaParseada = path.parse('/ruta/carpeta/subcarpeta/archivo.txt');
console.log('Ruta parseada:', rutaParseada);

// convertir un objeto a ruta
const rutaFormateada = path.format({
  root: '/',
  dir: '/ruta/carpeta/subcarpeta',
  base: 'archivo.txt',
  ext: '.txt',
  name: 'archivo'
});
console.log('Ruta formateada:', rutaFormateada);

//buscamos el separador de rutas
console.log('Separador de rutas del sistema actual:', path.sep);
