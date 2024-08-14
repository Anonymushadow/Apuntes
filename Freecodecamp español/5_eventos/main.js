const eventEmmiter = require("events");

const emisorProductos = new eventEmitter();

//al ejecutarse el evento compra...
emisorProductos.on("compra", ()=> {
    console.log("Compra realizada");
})

//ejecutar un evento llamdo compra
emisorProductos.emmit("compra");