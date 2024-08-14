function sumar(num1, num2) {
  //retornamos una promesa que espere a ser resuelta o rechazada 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = num1 + num2;
      resolve(resultado);
    }, 2000);
  });
}

async function obtenerDatos() {
  console.log("Iniciando proceso...");
  const res = await sumar(2, 4);
  console.log("Resultado: " + res);
}

obtenerDatos();

