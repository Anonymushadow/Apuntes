package arreglos;

import java.util.Scanner;
import javax.swing.JOptionPane;

public class Arreglos {
    public static void main(String[] args) {
        int[] edades = new int[3];//array de 3 espacios
        edades[0] = 45;
        edades[1] = 2;
        edades[2] = 23;
        String[] nombres = new String[3];//array de 3 espacios
        nombres[0] = "Nahuel";
        nombres[1] = "Cecilia";
        nombres[2] = "Hugo";
        
        for(int i = 0; i < 3; i++){
            System.out.println(i + ") " + nombres[i] + " tiene " + edades[i] + " años");
        }
        
        
                Scanner entrada = new Scanner(System.in);
        int lista;
        lista = Integer.parseInt(JOptionPane.showInputDialog("Cuantos espacios va a tener esta lista?"));
        char[] Letras = new char[lista];
        for (int i = 0; i < lista; i++) {
            System.out.println("Introduzca el caracter nro " + ((i)));
            Letras[i] = entrada.next().charAt(0);
        }
    }
    
}
