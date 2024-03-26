package PPackage;
import javax.swing.JOptionPane;
public class Operacion {
//atributos
    
    int num1;
    int num2;
    int suma;
    int resta;
    int multiplicacion;
    double division;
    
//metodos    
    
//metodo Numeros
    public void leerNumeros(){
        num1 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese su 1er numero: "));
        num2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese su 2do numero: "));
    }    
    
    public void sumar(){
    suma = num1 + num2;
    }
    
    public void restar(){
    resta = num1 - num2;
    }
    
    public void mult(){
    multiplicacion = num1 * num2;
    }
    
    public void div(){
    division = num1 / num2;
    }
    
    public void mostrar(){
        System.out.println("La suma es " + suma);
        System.out.println("La resta es " + resta);
        System.out.println("La multiplicacion es " + multiplicacion);
        System.out.println("La division es " + division);
    }
}
