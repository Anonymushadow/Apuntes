//Fetch
//fetch tiene por defecto GET
//fetch devuelve promesas

fetch("https://reqres.in/api/users", {
//method = metodo post o metodo get, body = lo que se envia (send())	
	method: "POST",
	body: JSON.stringify ({
		"nombre" : "miNombre",
		"apellido" : "miApellido"
	}),
	headers: {"Content-type" : "application/json"}
})
  .then(res=>res.json())
  .then(res=>console.log(res));


let imagen = document.querySelector(".imagen");

fetch("wolf.jpg")
  .then(res=>res.blob())
 //aca le doy a imagen un src que cambia cada ves que se reinicia la pagina
  .then(res=>imagen.src = URL.createObjectURL(res));



//fetch sin async y sin await
let getName = ()=>{
	fetch("info.txt")
	  .then(res => {
	  	if (res.ok) Promise.resolve(res)
	  		else Promise.reject(res);
	  })
	  .then(res=>console.log(res))
	  .catch(e=>console.log(e));
}

getName();


//fetch con async y await
let getname = async ()=>{
	let peticion = await fetch("info.txt");
	let resultado = await peticion.json();
	let div = document.createElement("DIV")
	div.innerHTML = resultado.Nombre;
	document.body.appendChild(div);
}

let boton = document.querySelector(".boton").addEventListener("click", getname);


