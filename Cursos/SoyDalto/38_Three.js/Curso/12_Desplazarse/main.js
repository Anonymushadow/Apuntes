import * as THREE from "./three.module.js";
import { PointerLockControls } from "./PointerLokControls.js";

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x990000);
scene.add(new THREE.GridHelper(1000, 1000));
scene.fog = new THREE.Fog(0x000, 0, 500);

//creamos los ejes
let xdir = 0;
let zdir = 0;
let velocidad;
let tInicial;
let tFinal;
let delta;

let mesh = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshLambertMaterial({
    color: 0x900909
  })
);

mesh.position.z = -50;
mesh.position.y = 5;

scene.add(mesh);
scene.add(new THREE.HemisphereLight(0XFFF));

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 10;

//creamos los controles de vista
let pControl = new PointerLockControls(camera, renderer.domElement);

let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
  pControl.lock();
});

//creamos los eventos que detectan cuando presionamos una tecla
document.addEventListener("keydown", (e)=>{
  switch(e.key){
    //izquierda
    case "ArrowLeft": {
      xdir = -1;
      break;
    }
    //arriba
    case "ArrowUp": {
      zdir = 1;
      break;
    }
    //derecha
    case "ArrowRight": {
      xdir = 1;
      break;
    }
    //abajo
    case "ArrowDown": {
      zdir = -1;
      break;
    }
  }
});

//creamos los eventos que detectan cuando soltamos una tecla
document.addEventListener("keyup", (e)=>{
  switch(e.key){
    //izquierda
    case "ArrowLeft": {
      xdir = 0;
      break;
    }
    //arriba
    case "ArrowUp": {
      zdir = 0;
      break;
    }
    //derecha 
    case "ArrowRight": {
      xdir = 0;
      break;
    }
    //abajo
    case "ArrowDown": {
      zdir = 0;
      break;
    }
  }
});

//obtenemos el tiempo inicial
tInicial = Date.now();
//sacamos la velocidad
velocidad = 20;

const animate = ()=>{
  requestAnimationFrame(animate);
  if(pControl.isLocked){
    //x = v * t --> delta distancia = delta velocidad por delta tiempo

    //utilizamos la funcion para mover a los lados --> moveRight(maginutd  y direccion)

    //obtenemos el tiempo final
    tFinal = Date.now();
    //sacamos el delta
    delta = (tFinal - tInicial)/1000;

    let xDist = xdir * velocidad * delta;
    let zDist = zdir * velocidad * delta;

    //modificamos el tiempo inicial
    tInicial = tFinal;

    pControl.moveRight(xDist);
    //utilizamos la funcion para mover hacia delante o atras --> moveForward(maginutd  y direccion)
    pControl.moveForward(zDist);
  }
  renderer.render(scene, camera);
}

window.addEventListener("load", animate);