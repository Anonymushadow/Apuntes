/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tiposdedatos;

/**
 *
 * @author ASUS
 */
public class TiposDeDatos {
    public static void main(String[] args) {
        //comentarios de una linea
        /*comentarios de 
          mas de una linea*/
        
        //Datos Primitivos
          //Variables:
            //Enteros:
             //byte: tamaño de 8 bits / numeros del -128 hasta 127 
               byte entero = 12;
               System.out.println("Numero entero: " + entero);
             //short: tamaño de 16 bits / numeros del -32,786 hasta 32,767
               short enteroCorto = 26;
               System.out.println("Numero entero: " + enteroCorto);
             //int: tamaño de 32 bits / numeros del -2,147,483,648 hasta 9223,372,854,775,807 
               int enteroInt = -300;
               System.out.println("Numero entero: " + enteroInt);
             //long: tamaño de 64 bits / numeros del 
               long enteroLargo = 14592;
               System.out.println("Numero entero: " + enteroLargo);
             //double
             //float = decimal
               float decimal = 14.5f;
               System.out.println("Numero decimal: " + decimal);
               
        //Datos NO Primitivos
          //Integer: numeros enteros + null
               Integer nulo = null;
               System.out.println("Numero entero: " + nulo);
          //Boolean: booleano
               boolean bool = false;
               System.out.println("Numero entero: " + bool);
          //String = cadenas de texto
                String palabra = "Hola Que Tal?";
                System.out.println(palabra);
          //final = constantes
                final int fin = 14;
                System.out.println(fin);
    }
    
}
