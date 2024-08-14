const curso = require("./1_demo-json.json");

//ver tipo de dato
console.log(typeof curso);

//ver objeto
console.log(curso);
console.log(curso.nombre);
console.log(curso.edad);
console.log(curso.curso);

data = {
    nombre: "nahuel",
    edad: 20
}

//convertir a json
data = JSON.stringify(data);
console.log(data);

//convertir a datos js
data = JSON.parse(data);
console.log(data);