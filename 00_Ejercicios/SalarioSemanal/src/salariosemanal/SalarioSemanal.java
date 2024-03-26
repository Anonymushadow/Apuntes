package salariosemanal;
import java.util.Scanner;
public class SalarioSemanal {

    public static void main(String[] args) { 

       float salario, horas, total;
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Cual es el salario por hora?");
        salario = entrada.nextFloat();
        
        System.out.println("Cuantas horas trabajaste esta semana?");
        horas = entrada.nextFloat();
        
        total = salario * horas;
        
        System.out.println("Usted debe cobrar $" + total + " esta semana");
    }
}