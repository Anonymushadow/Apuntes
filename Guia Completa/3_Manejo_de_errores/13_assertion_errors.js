const assert = require('assert');

function dividir(a, b) {
  assert.notStrictEqual(b, 0, 'No se puede dividir por cero.');
  return a / b;
}

try {
  const resultado = dividir(10, 0); // Esto generará un Assertion Error
  console.log('El resultado es:', resultado);
} catch (error) {
  console.error('Se produjo un error:', error.message);
}
