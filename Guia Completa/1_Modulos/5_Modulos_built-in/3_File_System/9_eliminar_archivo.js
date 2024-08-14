const fs = require("fs");

const url = "datos.txt";

fs.unlink(url, (error) => {
    if (error) {
      console.error('Error al eliminar el archivo:', error);
      return;
    }
    console.log('El archivo ha sido eliminado con éxito.');
  });
  