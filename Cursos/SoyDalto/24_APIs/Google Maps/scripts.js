"use stric";

const iniciarMap = (latitud, longitud)=>{
	var coordenadas = {lat: latitud, long: longitud};
	var map = new google.maps.Map(document.querySelector(".map"),{
		zoom: 10,
		center:	coordenadas
	});
	var marker = new google.maps.Marker({
		position: coordenadas,
		map: map
	});
}

iniciarMap(-34.5956145, -58.4431949);