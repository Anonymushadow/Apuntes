abstract class Vehiculos {//la clase absatracta no tiene objetos
  String color = "";
  String modelo = "";
  String marca = "";
  
  void combustible();//tiene que ser implentado en los hijos
}

abstract class esTransporte{
  void queTransporteSoy();
}
  
class Camion extends Vehiculos implements esTransporte{//usar solo los metodos de una interfaz
  @override
  void combustible(){
    print("Gasoil");
  }
  
  @override
  void queTransporteSoy(){
    print("Soy un camion");
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
