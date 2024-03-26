package pkg5.throwexception;

import java.util.Scanner;

public class Principal {
    private int num;
    private Scanner entrada;
    
    public void introducirNumero() throws ThrowException{
        entrada = new Scanner(System.in);
        do{
            System.out.println("Ingrese un numero");
            num = entrada.nextInt();
            if (num == 0) {//producir una excepcion personalizada --> no es un error en si pero puedo hacerlo error
                throw new ThrowException();
            }
        }while(num != 0);
    }
            
    public static void main(String[] args){
        Principal prueba = new Principal();
        try{
        prueba.introducirNumero();
        }catch(ThrowException e){
            System.out.println("Error: " + e);
        }
    }
}
