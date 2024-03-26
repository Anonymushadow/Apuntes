"use strict"

if (!("Notification" in window)) {
	console.log("las notificaciones no estan disponibles en tu navegador");
}else{
	Notification.requestPermission(()=>{
		if (Notification.permission == "granted") {
			new Notification("Suscribite");
		}
	});
}