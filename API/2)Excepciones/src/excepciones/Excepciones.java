package excepciones;
import java.util.Scanner;
public class Excepciones {
    public static void main(String[] args){
    //exepcioones: son errores que se detectan cuando se esta ejecutando
    
    //dividir por cero: AritmeticException
    System.out.println(5/0);
    
    //guardar cadena en int: inputMismatchException
    Scanner entrada = new Scanner(System.in);
    
    System.out.println("Escriba un numero: ");
    int num = entrada.nextInt();
        
    System.out.println(num);
    }
}

