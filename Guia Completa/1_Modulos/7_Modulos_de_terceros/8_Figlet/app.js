const figlet = require("figlet");

//generar arte ASCII a partir de texto
figlet("Hello, Figlet!", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});

//generar arte ASCII a partir de texto sincrono
const asciiArt = figlet.textSync("Hello, Figlet!");
console.log(asciiArt);

//ver las fuentes disponibles
figlet.fonts((err, fonts) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("Fuentes disponibles:", fonts);
});

//poner fuente por defecto
figlet.defaults.font = "big";

const asciiArt2 = figlet.textSync("Hello, Wolrd!");
console.log(asciiArt2);

//cambiar fuente
const options = {
  font: "3-d",
};

figlet("Hello, Font!", options, (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});

//ver informacion de figlet
console.log("Versión de Figlet:", figlet.metadata.version);

//utilizar fuentes personalizadas
//figlet.parseFont(customFont, 'MiFuente');

/*precargar todas las fuentes personalizadas
figlet.preloadFonts((err) => {
    if (err) {
      console.log('Error al precargar fuentes:', err);
      return;
    }
  
    const options = {
      font: 'Big',
    };
})
  */