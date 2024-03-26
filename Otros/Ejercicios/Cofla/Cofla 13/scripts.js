let aprobados = document.querySelector(".info__A");
let desaprobados = document.querySelector(".info__D");


let peticion = async ()=>{
	try{
	    let resultado = await axios("info.txt");
	    desaprobados.textContent = resultado.data.desaprobados;	
	    aprobados.textContent = resultado.data.aprobados;
	}catch(e){
		desaprobados.textContent = "la api fallo";	
	    aprobados.textContent = "la api fallo";
	}
}

let boton = document.querySelector(".get__info").addEventListener("click", peticion);