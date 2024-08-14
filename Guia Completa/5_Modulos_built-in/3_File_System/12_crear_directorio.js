const fs = require("fs");

const directorio = "datos";

fs.mkdir(directorio, (error) => {
    if (error) {
      console.error('Error al crear el directorio:', error);
      return;
    }
    console.log('Directorio creado con éxito.');
  });
  