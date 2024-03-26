import * as THREE from "./threejs/three.module.js";
import { STLLoader } from "./threejs/STLLoader.js";
import { OrbitControls } from "./threejs/OrbitControls.js";

let scene, camera, rendered, figura, material, luces, luces_dos;

const init = ()=>{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x431545);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 10;
    rendered = new THREE.WebGLRenderer();
    rendered.setSize(innerWidth, innerHeight)
    document.body.appendChild(rendered.domElement);

    scene.add(figura);

    let controls = new OrbitControls(camera, rendered.domElement);
    luces = new THREE.DirectionalLight(0xffffff);
    luces.position.set(0, 0, 10);
    scene.add(luces);
    luces_dos = new THREE.DirectionalLight(0xffffff);
    luces_dos.position.set(0, 0, -10);
    scene.add(luces_dos);
    animation();
}

const animation = ()=>{
    requestAnimationFrame(animation);
    figura.rotation.z += 0.01
    rendered.render(scene, camera);
}

//creamos un cargador de stl
let loader = new STLLoader();
//cargamos el modelo y ese modelo lo obtiene la funcion
loader.load("./3D Models/Baby_Yoda_v2.2.stl", (modelo3D)=>{
    //modelo3D viene como una geometria
    figura = new THREE.Mesh(
        modelo3D,
        //???
        material = new THREE.MeshLambertMaterial({
            Color: 0x232555
        })
    );
    figura.scale.set(0.1, 0.1, 0.1);
    figura.position.set(0, 0, 0);
    figura.position.y = - 4
    figura.rotation.x = - Math.PI / 2
    init();
});