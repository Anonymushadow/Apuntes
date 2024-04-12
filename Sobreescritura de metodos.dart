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
  
  void queVehiculoSoy(){
    print("Todavia no hay vehiculo");
  }
}

class Camion extends Vehiculos{
  @override
  void queVehiculoSoy(){
    print("Soy un Camion");
    print("");
  }
}

class Auto extends Vehiculos{
  @override
  void queVehiculoSoy(){
    print("Soy un Auto");
    print("");
  }
}
  

void main() {
  var camion = new Camion();
  camion.color = "Negro";
  camion.marca = "Suzuki";
  camion.modelo = "art";
  
  camion.mostrarVehiculo();
  camion.queVehiculoSoy();
  
  
  var auto = new Auto();
  auto.color = "Blanco";
  auto.marca = "BMW";
  auto.modelo = "T40";
  
  auto.mostrarVehiculo();
  auto.queVehiculoSoy();
}