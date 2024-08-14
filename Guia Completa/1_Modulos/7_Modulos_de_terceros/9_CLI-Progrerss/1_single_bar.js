const cliProgress = require('cli-progress');

//creamos una barra de progreso
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

//inicia la barra de progreso con un valor total y un valor inicial
progressBar.start(100, 0, { task: 'Procesando' }); //task es como una descripcion del proceso, al poner payload.task vamos a ver este texxto si esta x esta parte

//actualizar la barra
progressBar.update(50, { task: 'Mitad completada' });

//incrementar el progreso de la barra
progressBar.increment(10, { task: 'Avanzando' });

//cambiar el total de la barra sin detenerla
progressBar.setTotal(200);

//resetear el progreso de la barra
progressBar.reset();

//detener la barra
progressBar.pause();

//renaudar la barra
progressBar.resume();

//obtener la tarea que se esta ejecutando y mostrar su task
const payload = progressBar.getPayload();
console.log('Tarea actual:', payload.task); 


//detener la barra
progressBar.stop();

