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


//CUBO
const cuboGeometry = new THREE.BoxGeometry();//BoxGeometry(ancho, altura, profundidad, divisiones de cada lado)

//RECTANGULO
const rectanguloGeometry = new THREE.BoxGeometry(2, 5, 2, 5);

//CIRCULO
const circuloGeometry = new THREE.CircleGeometry(3, 4, 0, Math.PI / 2);//CircleGeometry(radio, cantidad de segmentos, angulo donde comienza el circulo, angulo donde termina el circulo)

//CONO
const conoGeometry = new THREE.ConeGeometry(3, 5, 10, 6, false, 0, Math.PI);//ConeGeometry(radio de la base, altura, cantidad de segmentos en la base, segmentos en la altura, es hueco?, donde comienza, donde acaba)

//CILINDRO
const cilindroGeometry = new THREE.CylinderGeometry(1, 5, 4, 10, 10, true, 0, 5);//CylinderGeometry(radio inf, radio sup, altura, cantidad de segmentos en las bases, segmentos en la altura, es hueco?, inicio, fin)

//PLANO
const planoGeometry = new THREE.PlaneGeometry(2, 5, 5, 3);//PlaneGeometry(alto, ancho, cantidad de segmentos para el ancho, c. segmentos para la altura)

//TETAEDRO
const tetaedroGeometry = new THREE.TetrahedronGeometry(3, 5);//TetrahedronGeometry(radio, nro de vertices)

//ESFERA
const esferaGeometry = new THREE.SphereGeometry(5, 50, 100, 0, Math.PI, 0, Math.PI / 2);//SphereGeometry(radio, cantidad de segmentos a lo largo, segmentos a los alto, inicio, fin, inicio nro 2, fin nro 2)

//TOROIDE
const toroideGeometry = new THREE.TorusGeometry(3, 1, 3, 5, Math.PI);//TorusGeometry(radio del circulo, radio del tubo, segmentos del circulo, segmentos a los largo, angulo)

//ANILLO
const anilloGeometry = new THREE.RingGeometry(1, 1.5, 3, 5, 0, Math.PI);//RingGeometry(diametro interno, radio externo, segmentos del circulo, segmentos a lo largo, inicio, fin)

const material = new THREE.MeshBasicMaterial({
    color: 0x39ff14,
    wireframe: true
});

const cubo = new THREE.Mesh(cuboGeometry, material);
cubo.position.x = -20;
cubo.position.y = -20;

const rectangulo = new THREE.Mesh(rectanguloGeometry, material);
rectangulo.position.x = -20;
rectangulo.position.y = 0;

const circulo = new THREE.Mesh(circuloGeometry, material);
circulo.position.x = -20;
circulo.position.y = 20;

const cono = new THREE.Mesh(conoGeometry, material);
cono.position.x = 0;
cono.position.y = -20;

const cilindro = new THREE.Mesh(cilindroGeometry, material);
cilindro.position.x = 0;
cilindro.position.y = 0;

const plano = new THREE.Mesh(planoGeometry, material);
plano.position.x = 0;
plano.position.y = 20;

const tetaedro = new THREE.Mesh(tetaedroGeometry, material);
tetaedro.position.x = 20;
tetaedro.position.y = -20;

const esfera = new THREE.Mesh(esferaGeometry, material);
esfera.position.x = 20;
esfera.position.y = 0;

const toroide = new THREE.Mesh(toroideGeometry, material);
toroide.position.x = 20;
toroide.position.y = 20;

const anillo = new THREE.Mesh(anilloGeometry, material);
anillo.position.x = -20;
anillo.position.y = -40;

scene.add(cubo, rectangulo, circulo, cono, cilindro, plano, tetaedro, esfera, toroide, anillo);

camera.position.z = 20;

const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
});



const animate = ()=>{
    requestAnimationFrame(animate);

    //recorremos todos los objetos dentro de la escena
    scene.traverse((figura)=>{
        //verificamos que el objetosea una figura y no la camara
        if(figura.isMesh === true){
            figura.rotation.x += 0.01;
            figura.rotation.y += 0.01;
        }
    });

    renderer.render(scene, camera);
}

window.addEventListener("load", animate);