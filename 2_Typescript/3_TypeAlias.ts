//creo el tipo de HeroId que sea unstring dividido por 4 guiones
type HeroId = `${string}-${string}-${string}-${string}-${string}`;


//creo los datos basicos del heroe
type HeroBasics = {
    nombre: string
    poder: number
}

//creo los datos avanzados del heroe qu eno seran pedidos al usuario
type HeroAdvance = {
    readonly id?: HeroId
    isAlive?: boolean
}

//creo un tipo heroe donde tendra los datos de los otros dos tipos creados previamente
type Hero = HeroBasics & HeroAdvance;

//creo una funcion que recibe los datos basicos del heroe y en base a estos crea un heroe
const crearHeroe = (data: HeroBasics)=> {
    const {nombre, poder } = data;

    return {
        id: "4553-432432-34234-332-4342", 
        nombre, 
        poder, 
        isAlive: true
    }
}

//creo un heroe
const thor = crearHeroe({nombre: "Thor", poder: 3000});

//si thor tiene la pripedad isAlive lo convierte en string
let Thor = thor.isAlive?.toString();






//Template Union Types
type hexadecimalColor = `#${string}`;

//si lo pongo sin el # me tirara error, ya que le indique que es un string y delante tendra un #
const rojo: hexadecimalColor = "#ff0000";


thor.id ?? "123-456-789-098-765";
//si no tiene un id el por defecto sera 123-456-789-098-765



//un dato puede ser un tipo u otro
let esVerdad: boolean | string;

esVerdad = "True";
esVerdad = true;



//retilizar partes de tipos
type character = {
    name: string,
    age: number,
    adress: {
        planet: string,
        city: string
    }
}

const adressMother: character["adress"] = {
    planet: "Earth",
    city: "Argentina"
}