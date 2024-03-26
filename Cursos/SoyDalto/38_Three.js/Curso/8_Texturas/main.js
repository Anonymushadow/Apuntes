import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
//creating scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

//add camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial();
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

var controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 3;
controls.maxDistance = 10;


controls.enableDamping = true;
controls.dampingFactor = 0.5;

controls.maxPolarAngle = Math.PI;

controls.screenSpacePanning = true;

//creamos un cargador de texturas
const loader = new THREE.TextureLoader();
//cargamos la textura
loader.load("./logo.jpg", (texture)=>{
    //de textura le asignamos la textura recibida al cargar la imagen
    material.map = texture;
    animate();
});

//animation
var animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
