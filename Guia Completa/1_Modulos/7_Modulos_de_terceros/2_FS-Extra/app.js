const fs = require("fs-extra");

//copiar archivo de un directorio a otro
const copiarArchivo = async () => {
  try {
    await fs.copy("directorio_origen", "directorio_destino");
    console.log("Directorio copiado exitosamente.");
  } catch (error) {
    console.error("Error al copiar el directorio:", error);
  }
};

//mover archivo de un directorio a otro
const moverArchivo = async () => {
  try {
    await fs.move("ruta/origen", "ruta/destino");
    console.log("Archivo o directorio movido con éxito.");
  } catch (error) {
    console.error("Error al mover archivo o directorio:", error);
  }
};

//eliminar ruta o archivo y su contenido
const remover = async () => {
  try {
    await fs.remove("ruta/archivo_o_directorio");
    console.log("Archivo o directorio eliminado con éxito.");
  } catch (error) {
    console.error("Error al eliminar archivo o directorio:", error);
  }
};

//verificamos que exista un directorio o lo creamos
const existedirectorio = async () => {
  try {
    await fs.ensureDir("ruta/nuevo_directorio");
    console.log("Directorio creado o asegurado con éxito.");
  } catch (error) {
    console.error("Error al crear o asegurar el directorio:", error);
  }
};

//verificamos que existe un archivo o lo creamos
const existeArchivo = async () => {
  try {
    await fs.ensureFile("ruta/nuevo_archivo.txt");
    console.log("Archivo creado o asegurado con éxito.");
  } catch (error) {
    console.error("Error al crear o asegurar el archivo:", error);
  }
};

//verificamos si existe un acceso directo
const existeAcceso = async () => {
  try {
    await fs.ensureLink("ruta/al/origen", "ruta/al/enlace-simbolico");
    console.log("Enlace simbólico creado o asegurado con éxito.");
  } catch (error) {
    console.error("Error al crear o asegurar el enlace simbólico:", error);
  }
};

//ver el contenido del directorio
const contenido = async () => {
  try {
    const archivosEnDirectorio = await fs.readdir("ruta/directorio");
    console.log("Archivos en el directorio:", archivosEnDirectorio);
  } catch (error) {
    console.error("Error al leer archivos en el directorio:", error);
  }
};

//leer archivo
const archivoLeido = async () => {
  try {
    const contenido = await fs.readFile("ruta/archivo.txt", "utf-8");
    console.log("Contenido del archivo:", contenido);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
};

//sobreescribir archivo
const sobreescrito = async () => {
  try {
    const data = "Este es el contenido que se escribirá en el archivo.";
    await fs.writeFile("ruta/nuevo_archivo.txt", data);
    console.log("Archivo escrito con éxito.");
  } catch (error) {
    console.error("Error al escribir el archivo:", error);
  }
};

//escribir al final
const escribirAlFinal = async () => {
  try {
    const data = "Estos datos se agregarán al archivo existente.";
    await fs.appendFile("ruta/existing_file.txt", data);
    console.log("Datos agregados al archivo existente.");
  } catch (error) {
    console.error("Error al agregar datos al archivo:", error);
  }
};
