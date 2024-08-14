//creamos la promesa
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

//manejamos la respuesta de la promesa
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  }).finally(() => {
    console.log("Promesa finalizada");
  });





//promise.all
const promesa1 = Promise.resolve(1);
const promesa2 = Promise.resolve(2);
const promesa3 = Promise.resolve(3);

const promesas = [promesa1, promesa2, promesa3];

Promise.all(promesas)
  .then((valores) => {
    // En este punto, todas las promesas se han resuelto con éxito
    console.log(valores); // [1, 2, 3]
  })
  .catch((error) => {
    // Este bloque de código se ejecutará solo si alguna promesa se rechaza
    console.error(error);
  });





//promise.race
const promesasRace = [promesa1, promesa2, promesa3];
Promise.race(promesas)
  .then((primerValorResuelto) => {})
  .catch((primerMotivoRechazo) => {});






//promesas anidadas
miPromesa
  .then((valor) => {
    return otraPromesa; // Devolver otra promesa dentro de un then
  })
  .then((otroValor) => {})
  .catch((error) => {});





//prime.allSettled
const promesa4 = Promise.resolve("Éxito");
const promesa5 = Promise.reject("Error 1");
const promesa6 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error 2"));

const promesass = [promesa1, promesa2, promesa3];

Promise.allSettled(promesass)
  .then((resultados) => {
    resultados.forEach((resultado, index) => {
      if (resultado.status === 'fulfilled') {
        console.log(`Promesa ${index + 1} resuelta: ${resultado.value}`);
      } else {
        console.error(`Promesa ${index + 1} rechazada: ${resultado.reason}`);
      }
    });
  });




  //siempre resolve
function foo() {
  return Promise.resolve(1);
}

//siempre reject
function foo() {
  return Promise.reject(1);
}