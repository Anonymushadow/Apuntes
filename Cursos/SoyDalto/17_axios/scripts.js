//axios es el reemplazo de fetch
//funciona con promesas pero se basa en xmlhttprequest
// utilizar axios si es para muchas peticiones, pero si son pocas usar fetch

axios("info.txt").then(res=>console.log(res.data));

//para hacerlo post
//lo que sigue despues de la coma es lo que se envia
axios.post("https://reqres.in/api/users", {
	"nombre" : "pablo",
	"apellido" : "perez"
})
   .then(res=>console.log(res));


//metodo 2
axios("https://reqres.in/api/users", {
	method: "post",
	data : {"nombre" : "lucas"}
})
  .then(res=>console.log(res));


//axios con async y await
let getname = async ()=>{
	let resultado = await axios("info.txt");
	let div = document.createElement("DIV")
	div.innerHTML = resultado.data.Nombre;
	document.body.appendChild(div);
}

let boton = document.querySelector(".boton").addEventListener("click", getname);


