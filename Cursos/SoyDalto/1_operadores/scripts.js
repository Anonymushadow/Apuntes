//operador ternario
let edad = 25;

if (edad < 18) console.log("es menor de edad");
else console.log("es mayor de edad");

    //condicion + "?" + que hace en ese caso + ":" (? = if y : = else) 
(edad > 18) ? console.log("es mayor de edad")
            : console.log("es menor de edad");

            (edad > 18) ? (
            	console.log("es mayor de edad"),
            	console.log("puede pasar")
            	)
            : (
            	console.log("es menor de edad"),
            	console.log("no puede pasar")
            	)


    //el operador ternario ocupa menos recursos que con el if


//operador spreed
//convierte un array en 3 valores disferentes
//el  operador spreed es el ...

let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";

let arr = ["valor 1", "valor 1", "valor 1"];
console.log(valor1, valor2, valor3);
console.log(arr);
console.log(...arr);
//tiene muchos usos el operador spreed:

//parametro res
const pRes = (...num)=>{
	console.log(num);
}

pRes(12,45,23);

//añadir arrays a arrays
arr = ["numero1", "numero2", "numero3", "numero4", "numero5", "numero6", "numero7"];
let arr2 = ["letra1", "letra2", "letra3", "letra4", "letra5", "letra6"];

arr.push(...arr2);//push metia dentro de un array

console.log(arr);

//concatenar arrays
let arr3 = [...arr, ...arr2];

console.log(arr);
console.log(arr2);
console.log(arr3);

//argumento rest
const sumar = (num2, num2)=>{
	console.log(num1 + num2);
}

sumar(...arr);//descompone los arrays 

