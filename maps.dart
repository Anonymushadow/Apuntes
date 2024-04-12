void main() {
  var animales = {
    "Canino": "Perro", 
    "Felino": "Gato", 
    "Ave": "Loro", 
    "Reptil": "Lagartija"  
  };
  
  print(animales["Canino"]);
  
  animales.forEach((k, v) => print(k));
  print(animales.keys);
  print(animales.values);
}
