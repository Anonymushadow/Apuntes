const dotenv = require("dotenv");

// Habilitar el modo de depuración para ver detalles de lo que sucede al importar las variables
dotenv.config({ debug: true });

//cambiar la codificacion a utf-8 (igual es por defecto utf-8)
dotenv.config({ encoding: "utf-8" });

//permitimos que el archivo .env modifique las variables de entorno del sistema donde se ejecuta
dotenv.config({ override: true });

//importamos las variables de entorno
dotenv.config();

//desactivo el modo depuracion
dotenv.config({ debug: false });

//mostrar una variable especifica
const dato = process.env.API_KEY;
console.log(dato);

//añadir variable de entorno 
process.env.NOMBRE = "Nahuel";
console.log(process.env.NOMBRE);

//reemplazar una variable de entorno
process.env.NOMBRE = "Pablo";
console.log(process.env.NOMBRE);

//definir variables de entorno con clave y valor 
const envString = 'MI_VARIABLE=ValorPersonalizado\nOTRA_VARIABLE=OtroValor';
const envConfig = dotenv.parse(envString);
console.log(envConfig.MI_VARIABLE);
console.log(envConfig.OTRA_VARIABLE);

// Cargar las variables de entorno desde un archivo específico
dotenv.config({ path: './.env' });
console.log(process.env.DB_PORT);

//cargar variables de entorno desde un objeto JavaScript (myObject) en lugar de cargarlas desde un archivo .env.
dotenv.config({ processEnv: myObject });

