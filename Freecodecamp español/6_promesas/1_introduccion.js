//creo una promesa y toma un resolve (si se ejecuta correctamente) o un reject (si falla)
const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        if(resolve){
            resolve("Promesa cumplida");
        }else{
            reject("Promesa cumplida");
        }
    }, 1);
});

//funcion para resultado correcto
const aceptada = (val)=> {
    console.log("Resultado: " + val);
}


//funcion para rechazo
const rechazada = (val)=> {
    console.log("Resultado: " + val);
}

//seleccion de funcion segun resultado de la promesa
miPromesa.then((aceptada, rechazada));


