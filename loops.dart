void main() {
for (var i = 0; i < 5; i++){
  print("vuelta nro $i --> for");
}
 
  var x = 0;
  while(x < 5){
    print("vuelta nro $x --> while");
    x++;
  }
  
  do{
    print("vuelta nro $x --> do while");
    x--;
  }while(x > 0);
}



