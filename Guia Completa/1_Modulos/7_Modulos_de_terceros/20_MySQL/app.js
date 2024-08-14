const mysql = require("mysql");

//crear objeto con datos de la conexion
const connection = mysql.createConnection({
  host: "localhost", // Nombre del host de la base de datos
  user: "tu_usuario", // Usuario de la base de datos
  password: "tu_contraseña", // Contraseña de la base de datos
  database: "nombre_de_la_base_de_datos", // Nombre de la base de datos a la que te conectarás
});

//conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos: " + error.message);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

//realizar querys
connection.query("SELECT * FROM tabla", (error, resultados) => {
  if (error) {
    console.error("Error en la consulta: " + error.message);
  } else {
    console.log("Resultados de la consulta:", resultados);
  }
});

//cerrar sesion en la base
connection.end((error) => {
  if (error) {
    console.error("Error al cerrar la conexión: " + error.message);
  } else {
    console.log("Conexión cerrada");
  }
});
