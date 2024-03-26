import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";
import { AnimationMixer } from "./three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf00);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
);

const helper = new THREE.GridHelper(10, 20);
scene.add(helper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({
    color: 0xffffff
});

let mixer;
//creamos el cargador de GLTF
const loader = new GLTFLoader();

//cargamos la figura
loader.loadAsync("./CesiumMan.glb").then((figura)=>{
    //creamos un mezclador de modelo y animaciones
    mixer = new AnimationMixer(figura.scene);
    //indicamos la animacion a usar
    var action = mixer.clipAction(figura.animations[0]);
    //iniciamos la animacion
    action.play();
    scene.add(figura.scene);
});



camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

let luces = new THREE.DirectionalLight(0xffffff);
luces.position.set(0, 0, 10);
scene.add(luces);

//creamos un reloj
const clock = new THREE.Clock();

const animate = ()=>{
    requestAnimationFrame(animate);
    //obtenemos el tiempo de animacion
    const delta = clock.getDelta();
    //actualizamos con el tiempo de aniamcion
    mixer.update(delta);
    renderer.render(scene, camera);
}

window.addEventListener("load", animate);