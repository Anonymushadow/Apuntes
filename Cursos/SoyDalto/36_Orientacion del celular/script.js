"use strict";

if (window.matchMedia("(orientation: portrait)").matches) {
 alert("youre in PORTRAIT mode") 
} else if (window.matchMedia("(orientation: landscape)").matches) { 
 alert("youre in LANDSCAPE mode") 
}

