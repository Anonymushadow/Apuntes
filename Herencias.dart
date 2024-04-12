class Vehiculos {
  String color = "";
  String modelo = "";
  String marca = "";
  
  void mostrarVehiculo(){
    print("Este veiculo tiene las siguientes caracteristicas:");
    print("Color: $color");
    print("Marca: $marca");
    print("Modelo: $modelo");
  }
}

class Camion extends Vehiculos{}
  

void main() {
  var camion = new Camion();
  camion.color = "Negro";
  camion.marca = "Suzuki";
  camion.modelo = "art";
  
  camion.mostrarVehiculo();
}
