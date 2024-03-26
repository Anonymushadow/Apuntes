package jop;
import javax.swing.JOptionPane;
public class JOP {
    public static void main(String[] args) {
        String cadena;
        int numero;
        char letra;
        double decimal;
        float dec;
        
        cadena = JOptionPane.showInputDialog("Introduzca una cadena ");
        System.out.println("Su Cadena es... " + cadena);
        
        numero = Integer.parseInt(JOptionPane.showInputDialog("Introduzca un numero "));
        System.out.println("Su numero es... " + numero);
        
        letra = JOptionPane.showInputDialog("Introduzca una cadena ").charAt(0);
        System.out.println("El primer caracter es... " + letra);
        
        decimal = Double.parseDouble(JOptionPane.showInputDialog("Introduzca un numero con decimal "));
        System.out.println("Su numero es... " + decimal);
        
        dec = Float.parseFloat(JOptionPane.showInputDialog("Introduzca un numero "));
        System.out.println("Su numero es... " + dec);
        
        JOptionPane.showMessageDialog(null, "su cadena es: " +  cadena);
        JOptionPane.showMessageDialog(null, "Su numero es: " +  numero);
        JOptionPane.showMessageDialog(null, "El primer digito es: " +  letra);
        JOptionPane.showMessageDialog(null, "El numero es: " +  decimal);
        JOptionPane.showMessageDialog(null, "El numero es: " +  dec);
    }
}