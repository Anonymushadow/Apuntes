const fs = require("fs");

const url = "datos.txt";
const newData = "Modificado con WriteFile";

fs.writeFile(url, newData, 'utf8', (error) => {
    if (error) {
      console.error('Error al sobreescribir el archivo:', error);
      return;
    }
    console.log('El archivo ha sido sobrescrito con éxito.');
  });
  