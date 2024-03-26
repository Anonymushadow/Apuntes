package ordenarmetodoseleccion;
import java.util.Scanner;
import javax.swing.JOptionPane;
public class OrdenarMetodoSeleccion {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int arreglo[], Elementos, min, aux;
        
        Elementos = Integer.parseInt(JOptionPane.showInputDialog("Cuantos espacios tendra este arreglo?"));
        
        arreglo = new int[Elementos];
        for (int i = 0; i < Elementos; i++) {
            System.out.println((i + 1) + " Digite un numero");
            arreglo[i] = entrada.nextInt();
        }
        
        for(int i = 0; i < Elementos; i++){
            min = i;
            for(int j = (i + 1); j < Elementos; j++){
                if (arreglo[j] < arreglo[min]) {
                    min = j;
                }
            } 
            aux = arreglo[i];
            arreglo[i] = arreglo[min];
            arreglo[min] = aux; 
        }
        //mostrar el arreglo ordenado
        System.out.println("Array ordenado: ");
        for(int i = 0; i < Elementos; i++){
            System.out.println(arreglo[i] + " - ");
        }
        System.out.println("Array de forma decreciente");
        for(int i = (Elementos - 1); i >= 0; i--){
            System.out.println(arreglo[i]);
        }
        System.out.println("");
    }
    
}
