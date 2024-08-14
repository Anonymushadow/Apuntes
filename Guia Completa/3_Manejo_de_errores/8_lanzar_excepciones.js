function square(num) {
  if (typeof num !== "number") {
    throw new TypeError(`Expected number but got: ${typeof num}`);
  }

  return num * num;
}

try {
  square("8");
} catch (err) {
  console.log(err.message); // espera un numero pero recibe un texto
}
