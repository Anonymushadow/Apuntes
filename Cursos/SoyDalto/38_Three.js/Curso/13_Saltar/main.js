import * as THREE from "./three.module.js";
import { PointerLockControls } from "./PointerLokControls.js";

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x990000);
scene.add(new THREE.GridHelper(1000, 1000));
scene.fog = new THREE.Fog(0x000, 0, 500);

let xdir = 0;
let zdir = 0;
let velocidad;
let tInicial;
let tFinal;
let delta;
//variables de salto
let jump = false, yi, vi, ti, t;


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

let pControl = new PointerLockControls(camera, renderer.domElement);

let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
  pControl.lock();
});



document.addEventListener("keydown", (e)=>{
  switch(e.code){
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
    //espacio
    case "Space": {
      if(!jump) {
        ti = Date.now();
      }
      jump = true;
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

//para doble salto hay que actualizar en cada salto el vi
tInicial = Date.now();
velocidad = 20;
yi = 10;
vi = 15;


const animate = ()=>{
  requestAnimationFrame(animate);
  if(pControl.isLocked){

    //activamos el salto
    if(jump){
      //y = yi + (vi * t) - 1/2g * t^2 --> altura = altura inicial mas velocidad inicial por tiempo - un medio de gravedad por tiempo al cuadrado
      t = ((Date.now() - ti) / 1000)*2;
      //sacamos la altura a saltar
      let altura = yi + (vi * t) - (0.5 * 9.8 * Math.pow(t, 2));
      //acabamos el movimiento
      if(altura <= yi){
        jump = false;
      }
      //movemos la camara
      camera.position.y = altura;
    }

    tFinal = Date.now();
    delta = (tFinal - tInicial)/1000;

    let xDist = xdir * velocidad * delta;
    let zDist = zdir * velocidad * delta;

    tInicial = tFinal;

    pControl.moveRight(xDist);
    pControl.moveForward(zDist);

  }
  renderer.render(scene, camera);
}

window.addEventListener("load", animate);