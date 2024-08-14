//promesas
function divideByTwo(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== "number") {
      reject(new TypeError("amount must be a number"));
      return;
    }
    if (amount <= 0) {
      reject(new RangeError("amount must be greater than zero"));
      return;
    }
    if (amount % 2) {
      reject(new OddError("amount"));
      return;
    }
    resolve(amount / 2);
  });
}

divideByTwo(3);

//callbacks
function hacerOperacionAsincrona(callback) {
  setTimeout(() => {
    const exito = Math.random() > 0.5; // Simula un resultado exitoso o un error
    if (exito) {
      callback(null, "Resultado exitoso");
    } else {
      callback(new Error("Error en la operación"));
    }
  }, 1000);
}

hacerOperacionAsincrona((error, resultado) => {
  if (error) {
    console.error("Ocurrió un error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});

//try catch mezclado con async await
async function ejecutarOperacion() {
  try {
    const resultado = await hacerOperacionAsincrona();
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

ejecutarOperacion();
