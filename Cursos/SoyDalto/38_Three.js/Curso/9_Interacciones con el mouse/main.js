import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { TransformControls } from "./TransformControls.js";


var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial();

var cube = new THREE.Mesh(geometry, material);
var cube_dos = new THREE.Mesh(geometry, material);
var cube_tres = new THREE.Mesh(geometry, material);

scene.add(cube);
scene.add(cube_dos);
scene.add(cube_tres);

//añadimos ayuda visual de grilas
scene.add(new THREE.GridHelper(10, 20));

camera.position.z = 5;

var controls = new OrbitControls(camera, renderer.domElement);

//creamos el transform controls
var tControl = new TransformControls(camera, renderer.domElement);
var tControl_dos = new TransformControls(camera, renderer.domElement);
var tControl_tres = new TransformControls(camera, renderer.domElement);

//creamos un evento para detectar si queremos girar la escena o si arrastramos la figura
tControl.addEventListener("dragging-changed", (e)=>{
  //en caso de que se este arrastrando la figura igualamos la activacion del orbit controls al opuestro del evento 
  controls.enabled = !(e.value);
});

tControl_dos.addEventListener("dragging-changed", (e)=>{
  controls.enabled = !(e.value);
});

tControl_tres.addEventListener("dragging-changed", (e)=>{
  controls.enabled = !(e.value);
});

//añadimos el transform control a una figura
tControl.attach(cube);
tControl_dos.attach(cube_dos);
tControl_tres.attach(cube_tres);

cube_dos.position.x = 2;
cube_tres.position.x = -2;

//añadimos el transform control a la escen
scene.add(tControl);
scene.add(tControl_dos);
scene.add(tControl_tres);

//definimos que tipo de accion realiza el transfomr control
tControl.setMode("translate");
tControl_dos.setMode("rotate");
tControl_tres.setMode("scale");


controls.minDistance = 3;
controls.maxDistance = 10;


controls.enableDamping = true;
controls.dampingFactor = 0.5;

controls.maxPolarAngle = Math.PI;

controls.screenSpacePanning = true;

const loader = new THREE.TextureLoader();
loader.load("./logo.jpg", (texture)=>{
    material.map = texture;
    animate();
});

var animate = function () {
  requestAnimationFrame(animate);

  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
