const glob = require("glob");

//buscar todos los archivos .txt en el directorio actual
glob("*.txt", (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


//buscar todos los archivos .txt en el directorio actual y en subdirectorios 
glob("**/*.txt", (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


//buscar los archivos comenzados con file y que tengan extension .txt
glob("file*.txt", (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


//  Buscar archivos que la letra a en el segundo lugar y que contenga extension .txt
glob("file*.txt", (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

//buscar archivos .js en subdirectorios pero ignorando node_modules
glob("**/*.js", {ignore: "node_modules/**"}, (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

//abortar la busqueda a los 2 segundos
glob("**/*.js", {signal: AbortSignal.timeout(2000)}, (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

//realizar multiplies busquedas (en este caso todos los js y txt de subdirectorios)
glob(["**/*.js", "**/*.txt"], {ignore: "node_modules/**"}, (err, data)=> {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});


