package Packete2;
//instanciar objeto de otra clase de otro paquete
import Packete1.Clase1;
public class Clase3 {
    public static void main(String[]args){
        Clase1 objeto1 = new Clase1();
        
        objeto1.setEdad(10);
        System.out.println("La edad es " + objeto1.getData());
    }
}
