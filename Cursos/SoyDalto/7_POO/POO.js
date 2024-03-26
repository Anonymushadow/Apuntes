class Animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
//	ladrar(){
//		if (this.especie == "perro") {
//			document.write("Guau" + "<br>");
//		}else{
//			document.write(`este animal no puede ladrar ya que es un ${this.especie}` + "<br>");
//		}
//	}
}

class Perro extends Animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrar(){
		alert("guau");
	}
static morder(){
	alert("el animal te mordio");
}
set setRaza(newName){
	this.raza = newName;
}
get getRaza(){
	return this.raza;
}
}

const perro = new Perro("perro",5,"rojo")
const gato = new Animal("gato",2,"negro")
const pajaro = new Animal("pajaro",1,"verde")

console.log(perro);
document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(pajaro.info + "<br>");

//metodos
perro.verInfo();
gato.verInfo();
pajaro.verInfo();

//abstraccion: reducir al maximo lo descrito
//modularidad: divir un problema grande en parte pequeñas
//encapsulamiento: privatizar losmdatos, bloquearlos a los demas
//polimorfismo: un objeto se comporta distinto con la misma funcion (un perro corre distinto que un gato)

//herencia:toma una clase y le agrega cosas nuevas


//perro.ladrar();
//gato.ladrar();
//pajaro.ladrar();

perro.ladrar();

//metodosestaticos: no ahce falta definir la propiedad

Perro.morder();

perro.setRaza = "pitbull";
document.write(perro.getRaza);