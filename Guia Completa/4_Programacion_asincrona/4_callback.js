//ejemplo con eventos
Button.addEventListener("click", ()=> {});//apenas se hace click se ejecuta el callback


//manejo de errores en callbacks
const fs = require('fs');

fs.readFile('/file.json', (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  console.log(data);
});


