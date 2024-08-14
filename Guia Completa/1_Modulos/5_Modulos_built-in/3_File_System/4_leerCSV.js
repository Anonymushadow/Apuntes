const fs = require("fs");

let url = "./datos.csv";

// Función para analizar el contenido CSV
function parseCSV(csvContent) {
  //dividimos el cvs en lineas, cada linea se separa por un salto en line
  const lines = csvContent.split("\n");
  //separamos los encabezados, en la linea 0 cada encabezado se separa por una coma
  const headers = lines[0].split(",");
  const data = [];

  //por cada linea...
  for (let i = 1; i < lines.length; i++) {
    //separamos cada dato, cada dato se separa por una coma
    const line = lines[i].split(",");
    //si el tamño de la linea es igual al tamaño del encabezado...
    if (line.length === headers.length) {
      //creamos un objeto que contendra los datos de cada encabezado
      const entry = {};
      //por cada encabezado...
      for (let j = 0; j < headers.length; j++) {
        //buscamos el elemento de la linea que corresponde a cada encabezado le otorgamos sus respectivos datos
        entry[headers[j]] = line[j];
      }
      //añadimos el objeto dentro de data
      data.push(entry);
    }
  }

  //devolvemos data
  return data;
}

// Lectura del archivo CSV
const iniciarLectura = (url) => {
  fs.readFile(url, "utf8", (error, csvContent) => {
    //si hay errorl o mostramos y retornamos para acabar la funcion
    if (error) {
      console.error("Error al leer el archivo:", error);
      return;
    }

    //ejecutamos la funcion para analizar el contenido CSV y le pasamos el contenido deel csv
    const parsedData = parseCSV(csvContent);
    console.log("Datos leídos del archivo CSV:");
    console.log(parsedData);
  });
};


iniciarLectura(url);