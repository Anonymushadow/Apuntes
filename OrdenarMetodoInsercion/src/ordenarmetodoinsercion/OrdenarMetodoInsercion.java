package ordenarmetodoinsercion;
import javax.swing.JOptionPane;
import java.util.Scanner;
public class OrdenarMetodoInsercion {
    public static void main(String[] args) {
       Scanner entrada = new Scanner(System.in);
        int arreglo[], Elementos, pos, aux;
        
        Elementos = Integer.parseInt(JOptionPane.showInputDialog("Cuantos espacios tendra este arreglo?"));
        
        arreglo = new int[Elementos];
        for (int i = 0; i < Elementos; i++) {
            System.out.println((i + 1) + " Digite un numero");
            arreglo[i] = entrada.nextInt();
        }
        for(int i = 0; i < (Elementos); i++){
            pos = i;
            aux = arreglo[i];
            while((pos > 0) && (arreglo[pos - 1] > aux)){
                arreglo[pos] = arreglo[pos - 1];
                pos--;
            }   
            arreglo[pos] = aux;
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
