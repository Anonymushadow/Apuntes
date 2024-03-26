import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf00);
const fog = new THREE.Fog(0x342555, 0.1, 8);

var loader = new THREE.TextureLoader();
//cargamos la imagen
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

//creamos los controles de orbita
const controls = new OrbitControls(camera, renderer.domElement);
//domElement es para que se quede escuchando los eventos del mouse

//distancia minima al hacer zoom
controls.minDistance = 3;

//distancia maxima al hacer zoom
controls.maxDistance = 13;

//habilitar y desabilitar zoom
controls.enableZoom = true;

//habilitar y desabilitar rotacion
controls.enableRotate = true;

//habilitar y desabilitar censibilidad
controls.enableDamping = true;
//modificar la censibilidad
controls.dampingFactor = 0.5;


//modificar los valores maximos y minimos de rotacion
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