const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Obtener la URL de la petición
  const url = req.url;

  // Obtener el encabezado de la petición
  const headers = req.headers;

  // Configurar el encabezado de respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Escribir en el cuerpo de la respuesta
  res.write('Hola, mundo!\n');

  // Finalizar la respuesta
  res.end();

  // Obtener el método de la petición
  const method = req.method;

  // Configurar un encabezado específico
  res.setHeader('X-Custom-Header', 'Valor personalizado');

  // Manejar eventos en la petición
  req.on('data', (chunk) => {
    console.log('Datos recibidos:', chunk.toString());
  });

  // Pipe para transmitir datos de la petición a la respuesta
  req.pipe(res);

  // Obtener el código de estado de la respuesta
  const statusCode = res.statusCode;
});

// Configurar el servidor para escuchar en el puerto 8080
server.listen(8080, 'localhost', () => {
  console.log('El servidor está escuchando en el puerto 8080');
});

// Cerrar el servidor
server.close(() => {
    console.log('El servidor se ha cerrado');
});


//realizar peticion http
http.request(options, (response) => {
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
  }).end();
  
