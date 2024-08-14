// 1_Terminar el proceso con un estado de éxito (código de salida 0)
process.exit(0);

// 1.5_Terminar el proceso con un estado de error (código de salida 1)
process.exit(1);

// 2_Envía una señal SIGTERM al otro proceso
const pidDelOtroProceso = "PID_DEL_OTRO_PROCESO";
process.kill(pidDelOtroProceso, "SIGTERM");

// 3_capturar excepciones no manejadas
process.on("uncaughtException", (error) => {
  console.error("Excepción no capturada:", error);
});

// 4_Forzar la terminación inmediata del proceso
console.log('Este mensaje se imprimirá antes de la terminación.');
process.abort();


//podemos manejar las ejecuciones de cada terminacion
process.on("exit", ()=> {
    console.log("Acabando proceso...");
});


