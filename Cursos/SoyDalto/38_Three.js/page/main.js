import * as THREE from "./three.js";
import { OrbitControls } from "./orbitControls.js";


//creamos la escena
const scene = new THREE.Scene();

//creamos una camara
//PerspectiveCamera(angulo, aspect ratio, desde donde va a grabar (cercania maxima), hasta donde va a garbar (lejania maxima))
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creamos un renderizador
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("bg")
});

//
renderer.setPixelRatio(window.devicePixelRatio);

//creamos el tamaño del renderizador
renderer.setSize(window.innerWidth, window.innerHeight);

//definimos la posicion en z de la camara
camera.position.setZ(30);

//creamos un tetaedro
const geometry = new THREE.TorusGeometry(10, 3, 6, 100);
//TorusGeometry(radio, tamaño del agujero, cantidad de lineas circulares, cantidad de lineas dentro de cada circulo, corte)

/*
Geometries:

BoxGeometry
CapsuleGeometry
CircleGeometry
ConeGeometry
CylinderGeometry
DodecahedronGeometry
EdgesGeometry
ExtrudeGeometry
IcosahedronGeometry
LatheGeometry
OctahedronGeometry
PlaneGeometry
PolyhedronGeometry
RingGeometry
ShapeGeometry
SphereGeometry
TetrahedronGeometry
*/


//creamos una textura
    //MeshBasicMaterial --> normal
    //MeshStandardMaterial --> con luces y sombras
const material = new THREE.MeshStandardMaterial({
    color: 0xff6347
});


//creamos una figura utilizando la geometria y el material juntos
const torus = new THREE.Mesh(geometry, material);

//añadimos la figura a la escena
scene.add(torus);

//añadimos un punto de luz
const pointLight = new THREE.PointLight(0xffffff);
//posicionamos la luz
pointLight.position.set(20, 20, 20);
//añadimos el punto de luz
scene.add(pointLight);

//creamos una luz ambiental
const ambientalLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientalLight);

//creamos un lightHelper (muestra donde esta el pointLight)
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

//creamos un gridHelper (GridHelper( size : number, divisions : Number, colorCenterLine : Color, colorGrid : Color ))
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

//creamos los controles para mover la figura
const controls = new OrbitControls(camera, renderer.domElement);



const starGeometry = new THREE.SphereGeometry(0.25);
const starMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff
});

const star = new THREE.Mesh(starGeometry, starMaterial);


function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    star.position.set(x, y, z);
    scene.add(star);
  }

//añadimos una textura al fondo
const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

//añadimos un cubo con foto
const cubeTexture = new THREE.TextureLoader().load("astronauta.png");
const astronauta = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({
        map: cubeTexture
    })
);

scene.add(astronauta);

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
//creamos una textura al ternativa para que no sea todo uniforme
const normalTexture = new THREE.TextureLoader().load("moon2.jpg");

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture
    })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(10);


function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;
  
    astronauta.rotation.y += 0.01;
    astronauta.rotation.z += 0.01;
  
    //para que se mueva en x e y cuando se hace scroll hay que quitar el OrbitControls
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

document.body.onscroll = moveCamera;

//añadimos animaciones
function animate(){
    //requerimos que se active la animacion en el navegador
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    //actualizamos los controles para que posicionen bien 
    controls.update();

    //renderizamos la escena con la camara
    renderer.render(scene, camera);
}

window.addEventListener("load", ()=>{
    animate();
    //creamos un array de 200 y por cada espacio añadimos una estrella
    Array(200).fill().forEach(addStar);
});

