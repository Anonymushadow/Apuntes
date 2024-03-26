import * as THREE from "./three.module.js";
import { PointerLockControls } from "./PointerLokControls.js";

var scene = new THREE.Scene();
scene.background = new THREE.Color(0x990000);
scene.add(new THREE.GridHelper(1000, 1000));
scene.fog = new THREE.Fog(0x000, 0, 500);

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

//con antialias mejoramos los graficos
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
//verificamos cuantos pixeles se necesitan para crear la vista
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 10;

//creamos los controles de vista
let pControl = new PointerLockControls(camera, renderer.domElement);

let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
  //iniciamoslos controles al hacer click
  pControl.lock();
});

const animate = ()=>{
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

window.addEventListener("load", animate);