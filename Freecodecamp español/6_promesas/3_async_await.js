function ordenarProducto(producto){
    return new Promise((resolve, reject)=> {
        console.log("1_Pedido: " + producto);
        setTimeout(()=> {
            if(producto == "Taza"){
                resolve(`2_su pedido (${producto}) ha sido exitoso`);
            }else{
                reject(`2_su pedido (${producto}) ha sido rechazado`);
            }
        }, 3000)
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log("3_Procesando pago...");
        console.log(resolve);
        setTimeout(()=> {
            resolve("4_Gracias por su compra");
        }, 4000);
    })
}


 async function realizarPedido(){
    try{
        const respuesta = ordenarProducto("Tza");
        console.log("5_Todo correcto");
        console.log("6_Respuesta del proceso: " + respuesta);
    }catch(e){
        console.log(e);
    }
}

realizarPedido()