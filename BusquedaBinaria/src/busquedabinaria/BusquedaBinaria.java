package busquedabinaria;

import javax.swing.JOptionPane;

public class BusquedaBinaria {
    public static void main(String[] args) {
        int arreglo[] = {4,5,2,3,1};
        int dato, inf, sup, mitad, i;
        boolean fin = false;
        dato = Integer.parseInt(JOptionPane.showInputDialog("ingrse el valor a buscar "));
        
        //busqueda binaria
        inf = 0;
        sup = arreglo.length - 1;
        mitad = (inf + sup)/2;
        i = 0;
        while(inf <= sup && i < 5){
            if (arreglo[mitad] == dato) {
                fin = true;
            }
            if (arreglo[mitad] > dato){
                sup = mitad;
                mitad = (inf + sup)/2;
            }
            if (arreglo[mitad] < dato){
                inf = mitad;
                mitad = (inf + sup)/2;
            }
            i++;
        }
        if (fin == true) {
            System.out.println("El numero fue encontrado en la posicion " + mitad);
        }else{
            System.out.println("El numero no fue encontrado");
        }
    }
}
