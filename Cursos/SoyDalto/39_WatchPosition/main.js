if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Ubicación obtenida con éxito");
    const divContainer = document.querySelector("div");
    divContainer.innerHTML = "Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude;
    navigator.geolocation.watchPosition(function(position) {
      divContainer.innerHTML = "Latitud: " + position.coords.latitude + " Longitud: " + position.coords.longitude;
    });
  }, function(error) {
    divContainer.innerHTML = "Error al obtener la ubicación: " + error.code;
  });
} else {
  divContainer.innerHTML = "Geolocalización no está disponible";
}
