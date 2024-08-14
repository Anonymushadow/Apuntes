const cliProgress = require('cli-progress');

//creamos una barra de progreso
const multibar  = new cliProgress.MultiBar({}, cliProgress.Presets.shades_classic);

// add bars
const b1 = multibar.create(200, 0);
const b2 = multibar.create(1000, 0);

// control bars
b1.increment();
b2.update(20, {filename: "test1.txt"});
b1.update(20, {filename: "helloworld.txt"});


