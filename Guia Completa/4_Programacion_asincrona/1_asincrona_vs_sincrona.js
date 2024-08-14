let a = 1;
let b = 2;

//asincrono
setTimeout(()=> {
    console.log("asincrono");
}, 100); //se ejecuta al final


//sincrono
console.log("sincrono"); // se ejecuta primero
console.log(a); // se ejecuta segundo
console.log(b); // se ejecuta tercero