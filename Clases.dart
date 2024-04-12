//Clases
class Vehiculos {
  String color = "";
  String modelo = "";
  String marca = "";
  
  //constructor (parametros por defecto)
  Vehiculos(this.marca, this.modelo);
  
  void Arrancar(){
    print("arranco el auto de color $color, marca $marca y modelo $modelo");
    velocidad(90);
  }
  
  void velocidad(int vel){
    print("el auto va a $vel km por hora");
  }
}

void main() {
  var auto = new Vehiculos("Ford", "Focus");
  auto.color = "Rojo";
  
  auto.Arrancar();
}


