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

const newCamera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10
);

//creamos un helper para que nos muestre la camara
const helper = new THREE.CameraHelper(newCamera);
scene.add(helper);


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


var i = 0;

const animate = ()=>{
    requestAnimationFrame(animate);

    //hacemos que la camara gire entorno a la posicion del cubo
    camera.lookAt(newCamera.position);

    camera.position.x = Math.cos(i) * 30;
    camera.position.z = Math.sin(i) * 30;

    i += 0.01;

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener("load", animate);