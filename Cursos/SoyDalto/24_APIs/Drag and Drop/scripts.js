let circulo = document.querySelector(".circulo");
let cuadrado = document.querySelector(".cuadrado");

circulo.addEventListener("dragstart", ()=>console.log(1));
circulo.addEventListener("drag", ()=>console.log(2));
circulo.addEventListener("dragend", ()=>console.log(3));

cuadrado.addEventListener("dragenter", ()=>console.log("entro"));
cuadrado.addEventListener("dragover", (e)=>{
	e.preventDefault();//permite soltar ahi dentro, permite el drop
	console.log("sigue");
});
cuadrado.addEventListener("drop", ()=>console.log("se solto"));
cuadrado.addEventListener("dragleave", ()=>console.log("salio"));

circulo.addEventListener("dragstart", (e)=>{
	e.dataTransfer.setData("clase", e.target.className)//toma la informacion del objeto arrastrado y agrega su clase
	//clase es como se guarda esa iformacion, se guarda con el nombre clase
});
cuadrado.addEventListener("drop", (e)=>{
	console.log(e.dataTransfer.getData("clase"));
})
