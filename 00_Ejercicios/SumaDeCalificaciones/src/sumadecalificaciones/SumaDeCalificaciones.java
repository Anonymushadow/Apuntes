package sumadecalificaciones;
import java.util.Scanner;
public class SumaDeCalificaciones {
    public static void main(String[] args) {
       float nota1, nota2, nota3, suma;
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Cual es la primera nota?");
        nota1 = entrada.nextFloat();
        
        System.out.println("Cual es la segunda nota?");
        nota2 = entrada.nextFloat();
        
        System.out.println("Cual es la tercera nota?");
        nota3 = entrada.nextFloat();
        
        suma = nota1 + nota2 + nota3;
        
        System.out.println("la suma de esas notas es " + suma);
    }
    
}
