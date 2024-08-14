const fs = require("fs");

const url = "datos.txt";
const newUrl = "data.txt";

fs.rename(url, newUrl, (error) => {
    if (error) {
      console.error('Error al renombrar el archivo:', error);
      return;
    }
    console.log('El archivo ha sido renombrado con éxito.');
  });
  