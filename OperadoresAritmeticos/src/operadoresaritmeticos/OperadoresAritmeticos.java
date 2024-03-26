package operadoresaritmeticos;
import java.util.Scanner;
public class OperadoresAritmeticos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        float numero1, numero2, suma, resta, multiplicacion, division, resto;
        
        System.out.println("Digite un numero: ");
        numero1 = entrada.nextFloat();
        System.out.println("Digite otro numero: ");
        numero2 = entrada.nextFloat();
        
        suma = numero1 + numero2;
        resta = numero1 - numero2;
        multiplicacion = numero1 * numero2;
        division = numero1 / numero2;
        resto = numero1 % numero2;
        
        System.out.println("La suma de estos numeros es: " + suma);
        System.out.println("La resta de estos numeros es: " + resta);
        System.out.println("La multiplicacion de estos numeros es: " + multiplicacion);
        System.out.println("La division de estos numeros es: " + division);
        System.out.println("El resto de la division de estos numeros es: " + resto);
        
        
        System.out.println(resto += 5);
        System.out.println(resto--);
        System.out.println(resto++);
    }
}
