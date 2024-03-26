class Celular {
	constructor(color,peso,pantalla,camara,ram){
		this.Color = color;
		this.Peso = peso;
		this.Pantalla = pantalla;
		this.Camara = camara;
		this.Ram = ram;
		this.encendido = false;
	}
	prendidoApagado(){
		if (this.encendido == false) {
			alert("se encendio el celular");
			this.encendido = true;
		}else{ 
			alert("se apago el celular");
			this.encendido = false;
		}
	}
  reinicio(){
  	if (this.encendido == true) {
  		alert("reiniciando dispositivo");
  	}else{
  		alert("el dispositivo esta apagado");
  	}
  }
  tomarFoto(){
  	alert(`la foto se saco con una resolucion de ${this.Camara}`);
  }
  grabar(){
  	alert(`se grabo un video con una resolucion de ${this.Camara}`);
  }
  info(){
  	return`
  	Color del celular: ${this.Color} <br>
  	Peso del celular: ${this.Peso} <br>
  	Resolucion de la pantalla: ${this.Pantalla} <br>
  	Resolucion de la camara: ${this.Camara} <br>
  	Memoria Ram: ${this.Ram} <br> 
  	`;
  }
}
class altaGama extends Celular{
  constructor(color,peso,pantalla,camara,ram,rdce){
  super(color,peso,pantalla,camara,ram);
  this.rdce = rdce;
}
GrabarLento(){
  alert("se grabo un video en camara lenta");
  }
  reconocimienoFacial(){
    alert("se uilizo el reconocimiento facial");
  }
  infoAltaGama(){
    return `${this.info()}Resolucion de Camara Extra: ${this.rdce}<br>`;
  }
}

celular1 = new Celular("rojo", "163 gramos", "5 pulgadas", "HD", "2Gb");
celular2 = new Celular("negro", "100 gramos", "6 pulgadas", "full HD", "16Gb");
celular3 = new Celular("blanco", "140 gramos", "4 pulgadas", "HD", "5Gb");
celular4 = new altaGama("rojo", "130gramos", "5.2 pulgadas", "4k", "3gb", "full HD");
celular5 = new altaGama("negro", "150gramos", "6 pulgadas", "4k", "4gb", "HD");

celular1.prendidoApagado();
celular1.prendidoApagado();
celular1.tomarFoto();
celular1.grabar();
celular1.reinicio();

document.write(`
	${celular1.info()} <br>
	${celular2.info()} <br>
	${celular3.info()} <br>
  ${celular4.infoAltaGama()} <br>
  ${celular5.infoAltaGama()}`);