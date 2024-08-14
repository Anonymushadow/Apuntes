const assert = require('assert');

//varificamos 5 es estrictamente igual a 5 y si no lo es devolvemos el mensaje 'Los valores deben ser iguales.'
assert.strictEqual(5, 5, 'Los valores deben ser iguales.');

//verifica que 5 y 10 sean desiguales, si no devuelve el string
assert.notStrictEqual(5, 10, 'Los valores no deben ser iguales.');

//verificamos si el 1er objeto tiene las mismas propiedades y valores
assert.deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }, 'Los objetos deben ser iguales.');

//verifica si los dos objetos son desiguales a nivel estructural
assert.notDeepStrictEqual({ a: 1, b: 2 }, { b: 2, a: 1 }, 'Los objetos no deben ser iguales.');

//verificamos si el valor es true
assert.ok(true, 'Esto es verdadero.');
assert.ok(42, 'Esto es verdadero.');

//lanzaamos un assertion error
assert.fail('Esto siempre fallará.');
