/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entradadedatos;
import java.util.Scanner;
public class EntradaDeDatos {
    public static void main(String[] args) {
//        Scanner entrada = new Scanher(System.in);
//int
        Scanner entrada = new Scanner(System.in);
        int numero;
        
        System.out.print("Digite un numero ");
        numero = entrada.nextInt();
        
        System.out.println("el numero es: " + numero);

// Float        
        float numeroDecimal;
        
        System.out.print("Digite un numero decimal ");
        numeroDecimal = entrada.nextFloat();
        
        System.out.println("el numero es: " + numeroDecimal);

//Double
        double Doble;
        
        System.out.print("Digite un numero con mas de un decimal ");
        Doble = entrada.nextDouble();
        
        System.out.println("el numero es: " + Doble);

//Cadenas hasta espacio
        String cadena;
        
        System.out.print("Digite una cadena ");
        cadena = entrada.next();
        
        System.out.println("la cadena es: " + cadena);
        
//Cadenas con espacio
        String cad;
        
        System.out.print("Digite una cadena ");
        cad = entrada.nextLine();
        
        System.out.println("la cadena es: " + cad);  
        
 //Caracteres
        char caracter;
        
        System.out.print("Digite un caracter ");
        caracter = entrada.next().charAt(0);
        
        System.out.println("su caracter es: " + caracter);  
    }
}
