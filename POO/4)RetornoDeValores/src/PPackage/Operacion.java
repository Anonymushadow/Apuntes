package PPackage;
import javax.swing.JOptionPane;
public class Operacion {
//metodos    
    
//metodo Numeros
    //variables fuera del metodo = variables globales 
    
    public int sumar(int num1, int num2){
        int suma = num1 + num2;
        return suma;
    }
    
    public int restar(int num1, int num2){
        int resta = num1 - num2;
        return resta;
    }
    
    public int mult(int num1, int num2){
        int multiplicacion = num1 * num2;
        return multiplicacion;
    }
    
    public double div(int num1, int num2){
        int division = num1/num2;
        return division;
    }
    
    public void mostrar(int suma, int resta, int mult, double div){
        System.out.println("La suma es " + suma);
        System.out.println("La resta es " + resta);
        System.out.println("La multiplicacion es " + mult);
        System.out.println("La division es " + div);
    }
}
