class Vehiculos {
  String color = "";
  String modelo = "";
  String marca = "";
  
  Vehiculos(this.marca, this.modelo);
  
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
  Camion(String marca, String modelo) : super(marca, modelo);
  
  @override
  void queVehiculoSoy(){
    print("Soy un Camion");
    print("");
  }
}

class Auto extends Vehiculos{//auto recibe marca y modelo y se lo envia al super, osea al padre
  Auto(String marca, String modelo) : super(marca, modelo);
  
  @override
  void queVehiculoSoy(){
    print("Soy un Auto");
    print("");
  }
}
  

void main() {
  var camion = new Camion("Suzuki", "Art");
  camion.color = "Negro";
  
  camion.mostrarVehiculo();
  camion.queVehiculoSoy();
  
  
  var auto = new Auto("BMW", "T30");
  auto.color = "Blanco";
  
  auto.mostrarVehiculo();
  auto.queVehiculoSoy();
}