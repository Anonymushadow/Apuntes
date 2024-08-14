const fs = require("fs");

const url = "datos.txt";
const newData = "añadido con appendFile";

fs.appendFile(url, newData, 'utf8', (error) => {
    if (error) {
      console.error('Error al escribir en el archivo:', error);
      return;
    }
    console.log('El archivo ha sido modificado con éxito.');
  });
  