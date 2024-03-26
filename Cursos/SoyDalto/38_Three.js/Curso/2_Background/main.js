const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf00);
//creamos efecto de neblina (color, distnacia entre camara y este fog)
const fog = new THREE.Fog(0x342555, 0.1, 8);

//creamos una funcion que permite cargar texturas
var loader = new THREE.TextureLoader();
//cargamos la imagen
loader.load("./bg.jpg", (texture)=>{
    //añadimos la imagen al background
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

const animate = ()=>{
    requestAnimationFrame(animate);

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener("load", animate);