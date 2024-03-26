package PPackage;
import javax.swing.JOptionPane;
public class Main {
    public static void main(String[] args){
        Persona p1 = new Persona("Juan", 40);
        Persona p2 = new Persona("2344212");
        
        p1.correr();
        p2.correr(200);
    }
}
