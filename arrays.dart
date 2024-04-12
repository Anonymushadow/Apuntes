void main() {
  var list = [1, 6, 7, 3, 0];
  
  print(list[0]);
  print(list.length);
  
  var onlyString = new List<String>();
  onlyString.add("Pedro");
  onlyString.add("Juan");
  onlyString.add("Pablo");
  onlyString.add("Mario");
  
  for(int i = 0; i < onlyString.length; i++){
    print(onlyString[i]);
  }
}
