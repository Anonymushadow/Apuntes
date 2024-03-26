package clasemath;

import java.util.Scanner;

public class ClaseMath {

   public static void main(String[] args) {
       //siempre double
       double raiz = Math.sqrt(9.8);
       System.out.println(raiz);
       
       //siempre double----  pow(base, exponente)
       double potencia = Math.pow(9, 8);
       System.out.println(potencia);
       
       //long para redondear o float para redondear en un decimal
       long redondeoALong = Math.round(9.84545);
       System.out.println(redondeoALong);
       
       float redondeoAFloat = Math.round(9.8345354f);
       System.out.println(redondeoAFloat);
       
       //siempre double
       double aleatorio = Math.random();
       System.out.println(aleatorio);
    }
}
