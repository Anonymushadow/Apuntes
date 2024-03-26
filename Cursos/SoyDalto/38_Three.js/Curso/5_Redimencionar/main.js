import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf00);
const fog = new THREE.Fog(0x342555, 0.1, 8);

var loader = new THREE.TextureLoader();
loader.load("./bg.jpg", (texture)=>{
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const cubo = new THREE.Mesh(geometry, material);


scene.add(cubo);

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

//al modificarse el tamaño de la ventana
window.addEventListener("resize", ()=>{
    //redefinimos las medidas de la camara
    camera.aspect = window.innerWidth / window.innerHeight;
    //actualizar la camara con los datos actuales
    camera.updateProjectionMatrix();
    //redefinimos las medidas del renderizador
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderizamos de vuelta la vista
    renderer.render(scene, camera);
});

controls.minDistance = 3;

controls.maxDistance = 13;

controls.enableZoom = true;

controls.enableRotate = true;

controls.enableDamping = true;

controls.dampingFactor = 0.5;


controls.maxPolarAngle = 0.3;

//???
controls.screenSpacePanning = true;


const animate = ()=>{
    requestAnimationFrame(animate);

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener("load", animate);