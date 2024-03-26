let apk = false;
let open = false;

class app{
  constructor(descargas, puntuacion, peso){
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
  }
  instalar(){
    if (apk == false) {
      alert("se instalo la aplicacion correctamente");
      apk = true;
    }else{
      alert("la aplicacion ya esta instalada en su dispositivo")
    }
  }
  desinstalar(){
    if (apk == true) {
      alert("se desinstalo la aplicacion correctamente");
      apk = false;
    }else{
      alert("la aplicacion no esta instalada en su dispositivo");
    }
  }
  abrir(){
    if (apk == true){
  if (open == true) {
      alert("la aplicacion ya esta abierta");
    }else{
      alert("la aplicacion se acaba de abrir")
      open = true;
    }
}else{
alert(" la aplicacion no esta instalada en este dispositivo");
}
}
  cerrar(){
  if (open == true) {
      alert("la aplicacion se cerro correctamente");
      open = false;
    }else{
      alert("la aplicacion no esta abierta")
    }

  }
  info(){
    return `  
    Cantidad de Descargas: ${this.descargas} <br>
    Puntuacion: ${this.puntuacion} <br>
    Peso de la Aplicacion: ${this.peso}`
  }
}

whatsapp = new app("1m", "4 estrellas", "60mb");

document.write(`${whatsapp.info()}`);

whatsapp.instalar();
whatsapp.instalar();
whatsapp.desinstalar();
whatsapp.desinstalar();
whatsapp.abrir();
whatsapp.abrir();
whatsapp.cerrar();
whatsapp.cerrar();