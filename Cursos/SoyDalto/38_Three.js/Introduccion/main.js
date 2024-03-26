//creamos la escena
const scene = new THREE.Scene();

//creamos la camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//lo que esta mas cerca de 0.1 de la camara no se pintara al igual que lo que etsa mas lejos que 1000

//renderizador
const renderer = new THREE.WebGLRenderer();

//lo pintamos en toda la pantalla
renderer.setSize(window.innerWidth, window.innerHeight);

//añadimos el render para que se pinte 
document.body.appendChild(renderer.domElement);



//geometrias --> modelos 3d (se suelen importar)

//creamos una caja
const geometry = new THREE.BoxGeometry();

//materiales --> texturas
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

//creamos un cubo con la geometria y el material previamente creados
const cube = new THREE.Mesh(geometry, material);

//añadimos el cubo a la escena
scene.add(cube);

//posicionamos la camara en el eje z
camera.position.z = 5;

//renderizamos los frames
const animate = ()=> {
    //pedimos que se anime
    requestAnimationFrame(animate);
    
    //animaciones
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //renderizamos la escena con la camara
    renderer.render(scene, camera);
}

window.addEventListener("load", animate);

