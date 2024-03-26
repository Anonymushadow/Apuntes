let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

let html = `protocolo:  <b> ${protocol} </b> <br> pathname:  <b> ${pathname} </b> <br> hostname: <b> ${hostname} </b> <br> url: <b> ${href} </b> `

document.write(html);