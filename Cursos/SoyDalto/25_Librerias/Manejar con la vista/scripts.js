"use strict";

let ai = document.querySelector(".AI");
let ad = document.querySelector(".AD");
let di = document.querySelector(".DI");
let dd = document.querySelector(".DD");

webgazer.setGazeListener((data, elapsedTime)=>{
	if (data == null) {
		return;
	}

	ai.style.background = "#fff";
	ad.style.background = "#fff";
	di.style.background = "#fff";
	dd.style.background = "#fff";

	if (data.x < window.innerWidth / 2 && data.y < window.innerHeight / 2) {
		ai.style.background = "#f00";
	}

	if (data.x < window.innerWidth / 2 && data.y > window.innerHeight / 2) {
		di.style.background = "#f00";
	}

	if (data.x > window.innerWidth / 2 && data.y < window.innerHeight / 2) {
		ad.style.background = "#f00";
	}
	
	if (data.x > window.innerWidth / 2 && data.y > window.innerHeight / 2) {
		dd.style.background = "#f00";
	}
}).begin();