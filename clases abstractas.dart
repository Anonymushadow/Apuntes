abstract class Vehiculos {//la clase absatracta no tiene objetos
  String color = "";
  String modelo = "";
  String marca = "";
  
  void combustible();//tiene que ser implentado en los hijos
}
  
class Camion extends Vehiculos{
  @override
  void combustible(){
    print("Gasoil");
  }
}
class Auto extends Vehiculos{
  @override
  void combustible(){
    print("Nafta");
  }
}

void main() {
  var camion = new Camion();
  camion.color = "Rojo";
  camion.marca = "Audi";
  camion.marca = "546";
  camion.combustible();
  
  
  var auto = new Auto();
  auto.color = "Amarillo";
  auto.marca = "Chevrolet";
  auto.marca = "Camaro";
  auto.combustible();
}