package PPackage;
import javax.swing.JOptionPane;
public class Operacion {
//atributos
    //variables fuera del metodo = variables globales
    int suma;
    int resta;
    int multiplicacion;
    double division;
    
//metodos    
    
//metodo Numeros
    //variables fuera del metodo = variables globales 
    
    public void sumar(int num1, int num2){
        suma = num1 + num2;
    }
    
    public void restar(int num1, int num2){
        resta = num1 - num2;
    }
    
    public void mult(int num1, int num2){
        multiplicacion = num1 * num2;
    }
    
    public void div(int num1, int num2){
        division = num1/num2;
    }
    
    public void mostrar(){
        System.out.println("La suma es " + suma);
        System.out.println("La resta es " + resta);
        System.out.println("La multiplicacion es " + multiplicacion);
        System.out.println("La division es " + division);
    }
}
