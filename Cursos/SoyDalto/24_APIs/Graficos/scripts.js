document.querySelector(".addParam").addEventListener("click", addParam);
document.querySelector(".showResults").addEventListener("click", showResults);

var parametros = [];
var valores = [];

function addParam(){
	let html = document.querySelector(".container").innerHTML;
	let newHTML = `<div>
				     <input type="text" class="parametro" placeholder="Parametro">
				     <input type="number" class="valor"placeholder="Valor" min="0">
			       </div>`
	document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
	for (var i = document.querySelectorAll(".parametro").length - 1; i >= 0; i--) {
		parametros.push(document.querySelectorAll(".parametro")[i].value);
		valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
	}
	var data = [{
		x: parametros,
		y: valores,
		//bar = barra  linear = lineas
		type: "linear"
	}];
	Plotly.newPlot("grafico", data);
}