//miembros estaticos = 
package Packete2;
public class Static {
    private static String frase = "primera frase";
    
    public static int sumar(int n1, int n2){
        int suma = n1 + n2;
        return suma;
    }
    
    public static void main(String[] args){
        System.out.println(Static.frase);
        System.out.println("La suma es " + Static.sumar(3, 4));
    }
}
