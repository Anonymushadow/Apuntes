//encapsulamiento = ocultar algunos datos
//metodos accesores = setter y getter
///setter = establecer valores a clases privadas desde otro class
package Packete1;
public class Clase1 {
    
    //private = no se puede usar en otras clases
    private int atributo3;
    private String obj2;
    
    //setter 
    public void setEdad(int atributo3){
        this.atributo3 = atributo3;
    }
    
    public int getData(){
        return atributo3;
    }

    public String getObj2() {
        return obj2;
    }

    public void setObj2(String obj2) {
        this.obj2 = obj2;
    }
    
    
    
}
