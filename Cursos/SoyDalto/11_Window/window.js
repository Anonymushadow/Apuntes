let youtube = "https://www.youtube.com/"
let ventana = window.open(youtube);
ventana.close();
let closed = ventana.closed;
document.write(closed);
confirm("estas seguro?");
let screen = window.screenTop;
console.log(screen);
screen = window.screenLeft;
console.log(screen);
const scrollX = window.scrollX;
alert(scrollX);
const scrollY = window.scrollY;
alert(scrollY);
let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;
//let assign = window.location.assign("https://www.youtube.com/");

document.write(href + "<br>");
document.write(hostname + "<br>");
document.write(pathname + "<br>");
document.write(protocol + "<br>");