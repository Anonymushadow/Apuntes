void main() {
//operaciones matematicas
  var num1 = 12;
  int num2 = 40;
  
  if(num1 == num2){
    print("verdadero");
  }else{
    print("falso");
  }
  
  switch(num1){
    case 1:
      print("El sumero es 1");
      break;
    case 2:
      print("El sumero es 2");
      break;
    case 3:
      print("El sumero es 3");
      break;
    case 4:
      print("El sumero es 4");
      return;
    default:
      throw("no es ninguno de los anteriores");
      break;
  }
  
}