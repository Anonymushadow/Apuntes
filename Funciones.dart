void main() {
  saludos("Pedro");
  var msg = mitad(9);
  print(msg);
  unaLinea();
  sinRetorno();
  ParametroOpcional("Nahuel");
  ParametroOpcional("Nahuel", 50);
  opcional(Nombre: "Nahuel", Pais: "Argentina");
}

saludos(nombre){
  print("Mi nombre es $nombre");
}

mitad(double num){
  num = num/2;
  String msg = "la mitad de tu numero es $num";
  return msg;
}

void sinRetorno(){
  print("no hay retorno");
}

void unaLinea() => print("Funcion en una linea unica");

void ParametroOpcional(String name, [var Edad]){
  if(Edad != null){
    print("Bienvenido $name, tenes $Edad años");
  }else{
    print("Bienvenido $name");
  }
}
void opcional({var Nombre = "Anonimous", var Edad, var Pais}){//anonimous seria un nombre por defecto
  var opcional = new StringBuffer("Bienvenidos a dart ");
  if(Nombre != null){
    opcional.write("$Nombre ");
  }
  
  if(Edad != null){
    opcional.write("$Edad ");
  }
  
  if(Pais != null){
    opcional.write("$Pais ");
  }
  
  print(opcional);
}
