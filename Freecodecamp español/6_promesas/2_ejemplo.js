const statusPedido = ()=> {
    //simulacion de fallas
    const status = Math.random() < 0.8;
    return status;
}

console.log(statusPedido());


const pedidoPizza = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        if(statusPedido()){
            resolve("Pedido realizado con exito"); 
        }else{
            reject("Pedido rechazado");
        }
    }, 3000)
});


const pedidoExitoso = (value)=> {
    console.log(value);
}


const pedidoRechazado = (value)=> {
    console.log(value);
}

pedidoPizza.then(pedidoExitoso, pedidoRechazado);


//otro metodo
pedidoPizza
    .then((resolve)=> {
        console.log(resolve);
    })
    .catch((e)=> {
        console.log(e);
    })