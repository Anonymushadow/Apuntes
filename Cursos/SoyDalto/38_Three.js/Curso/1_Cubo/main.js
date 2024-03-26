//creo la escena
const scene = new THREE.Scene();

//cambiamos el fondo de la escena
scene.background = new THREE.Color(0xf00);

//creo la camara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
);

//creo el renderizador
const renderer = new THREE.WebGLRenderer();

//añado el tamaño al renderer
renderer.setSize(window.innerWidth, window.innerHeight);

//añadimos el renderer al html
document.body.appendChild(renderer.domElement);

//creamos una geometria (un molde)
const geometry = new THREE.BoxGeometry();

//creamos una textura
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    //le quitamos el pintado y dejamos los bordes unicamente
    wireframe: true
});

//creamos un cubo con la geometria y el material previamente creados
const cubo = new THREE.Mesh(geometry, material);


//añadimos el cubo a la escena
scene.add(cubo);


//movemos la posicion de la camara a un punto distinto del cubo
camera.position.z = 5;

const animate = ()=>{
    //ejecutamos una y otra vez la animacion
    requestAnimationFrame(animate);

    //rotamos le cubo
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    //renderizamos la escena junto a la camara
    renderer.render(scene, camera);
}

window.addEventListener("load", animate);