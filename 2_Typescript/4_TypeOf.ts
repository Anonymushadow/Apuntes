const adress = {
    planet: "Earth",
    city: "Los Angeles"
}

type Adress = typeof adress;

const miDireccion:Adress = {
    planet: "Mars",
    city: "e83jr39"
}

const crearNuevoAdress = ()=> {
    return {
        direction: "MyHouse",
        number: 23323
    }
}

type newAdress = ReturnType<typeof crearNuevoAdress>;