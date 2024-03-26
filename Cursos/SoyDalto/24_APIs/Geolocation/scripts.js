"use strict";

//geolocation
let geolocalizacion = navigator.geolocation;

//getCurrentPosition() trabaja con tres argumentos:
//position
//error
//options
//tiene que tener si o si uno

const posicion = (pos)=>{
    console.log(pos);
}

geolocalizacion.getCurrentPosition(posicion);


const latitud = (pos)=>{
    console.log(pos.coords.latitude);
}

geolocalizacion.getCurrentPosition(latitud);

const longitud = (pos)=>{
    console.log(pos.coords.longitude);
}

geolocalizacion.getCurrentPosition(longitud);



//errores
const err = ()=>{
    console.log(e);
}

geolocalizacion.getCurrentPosition(posicion, err);


//opciones
const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAccuracy: true
}

const posicion2 = (pos)=>{
    console.log(pos);
}

geolocalizacion.getCurrentPosition(posicion2, err, options);


let id = navigator.geolocation.watchPosition(posicion2);
