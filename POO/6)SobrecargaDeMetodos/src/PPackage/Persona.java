package PPackage;
import javax.swing.JOptionPane;
public class Persona {
    String nombre;
    int edad;
    String dni;
    
    //metodos
    
    //metodo constructor

    //sobrecarga de constructores = cuando hay mas de un constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public Persona(String dni) {
        this.dni = dni;
    }
    
    
    //sobrecarga de metodos = cuando hay mas de un constructor con el mismo nombre
    public void correr(){
        System.out.println("Soy " + nombre + ", tengo " + edad + " años y estoy corriendo");
    }
    
    public void correr(int km){
        System.out.println("he corrido " + km + " kilometros");
    }
}
