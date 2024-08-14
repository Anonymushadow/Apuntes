//Range Error
const l = console.log;
const arr = [90, 88];
arr.length = 90 ** 99;

//Reference Error
const data = "X";
console.log(datos);

//Sintax Error
if ((x = 9)) {
  //se debe poner "==" en vez de "="
  console.log("OK");
}

//Type Error
const num = 90;
console.log(num.toUpperCase());

//URI Error
url = "https://www.ejemplo.com/mi página";
parsed_url = urllib.parse.urlparse(url);

//Internal Error
function recursiva() {
  recursiva();
}

try {
  recursiva();
} catch (error) {
  console.error(error);
}
//la funcion se esta llamando infinitamente hasta que hay un error interno debido al espacio de pila de js
