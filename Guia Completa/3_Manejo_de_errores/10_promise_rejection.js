async function miFuncion() {
  try {
    const resultado = await miPromesa;
    console.log("Éxito:", resultado);
  } catch (error) {
    console.error("Error:", error); // Manejamos el error aquí
  }
}

miFuncion();
