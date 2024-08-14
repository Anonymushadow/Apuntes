const fs = require('fs');
const directorio = './datos';

fs.readdir(directorio, (error, archivos) => {
  if (error) {
    console.error('Error al listar archivos en el directorio:', error);
    return;
  }
  console.log('Archivos en el directorio:', archivos);
});
