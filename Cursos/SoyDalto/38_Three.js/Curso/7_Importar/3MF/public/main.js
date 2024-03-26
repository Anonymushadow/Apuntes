import * as THREE from "./threejs/three.module.js";
import { STLLoader } from "./threejs/STLLoader.js";
import { OrbitControls } from "./threejs/OrbitControls.js";
import { threeMFLoader } from "./threejs/fflate.module.js"; 

let scene, camera, rendered, figura, material, luces, luces_dos;

const init = ()=>{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x431545);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 10;
    rendered = new THREE.WebGLRenderer();
    rendered.setSize(innerWidth, innerHeight)
    document.body.appendChild(rendered.domElement);

    //scene.add(figura);

    //creamos un cargador de 3MF
    const loader_dos = new threeMFLoader();
    //cargamos el modelo y ese modelo lo obtiene la funcion
    loader_dos.load("./3D Models/Dragon_Base_fix_repaired.3mf", (figura_dos)=>{
        //el objeto 3MF ya tiene un mesh
        figura_dos.position.set(0, 0, 0);
        scene.add(figura_dos);
    }); 

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

let loader = new STLLoader();
loader.load("./3D Models/Baby_Yoda_v2.2.stl", (modelo3D)=>{
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