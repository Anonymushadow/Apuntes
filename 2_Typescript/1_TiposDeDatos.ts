//tipar varibles
const nombre: string = "Nahuel";
const edad: number = 45;
const esCasado: boolean = false;
const datoIndefinido: undefined = undefined;
const datoNulo: null = null;
const datoCualquiera: any = "Perro";


//Inferencia (no hace falta decirle el tipo de dato)
let user = "Pablo"; //sabe que es un string
let age = 90; //sabe que es un number
let isMarried = true; //sabe que es un booleano
let nullData = null; //sabe que es null
let today; //lo toma como un any






//tipar funciones
const saludar = (a: number, b: number): void => {
    console.log("Hola");
}

//Parametros tipo Objetos
//Metodo 1
function despedir({nombre, edad}: {nombre: string, edad: number}){
    console.log("Adios " + nombre + ", tenes " + edad + " años");
}

//Metodo 2
function despedir2(Persona: {nombre: string, edad: number}){
    const { nombre, edad } = Persona;
    console.log("Adios " + nombre + ", tenes " + edad + " años");
}

//Retornos
function retornarNumero():number {
    return 20;
}



//pasarle una funcion como parametro
//(parametro: tipo)=> que devuelve
function retornarFuncion(fn: (userName: string)=> void) {
    return fn("Nahuel");
}

let funcionAEjecutar = (userName: string)=> {
    console.log("Welcome " + userName);
};

retornarFuncion(funcionAEjecutar);