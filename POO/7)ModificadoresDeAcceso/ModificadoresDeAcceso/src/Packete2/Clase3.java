package Packete2;
//instanciar objeto de otra clase de otro paquete
import Packete1.Clase1;
public class Clase3 {
    public static void main(String[]args){
        Clase1 objeto1 = new Clase1();
        
        //atributo1 no esta disponible xque no esta en el mismo class
        objeto1.atributo2 = 16;
    }
}
