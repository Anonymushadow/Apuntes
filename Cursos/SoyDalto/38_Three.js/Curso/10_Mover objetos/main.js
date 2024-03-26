import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { TransformControls } from "./TransformControls.js";
import { DragControls } from "./DragControls.js";

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

scene.add(new THREE.GridHelper(10, 20));

camera.position.z = 5;

var controls = new OrbitControls(camera, renderer.domElement);

//creamos los controles de arrastre (en el objeto añadimos quellos arrastrables)
var dControl = new DragControls([cube, cube_dos, cube_tres], camera, renderer.domElement);

//evitamos que se mueva todo al arrastrar
dControl.addEventListener("dragstart", ()=>{
  controls.enabled = false;
});

dControl.addEventListener("dragend", ()=>{
  controls.enabled = true;
})

cube_dos.position.x = 2;
cube_tres.position.x = -2;



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
