package ordenarmetodoburbuja;
import java.util.Scanner;
import javax.swing.JOptionPane;
public class OrdenarMetodoBurbuja {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int arreglo[], Elementos, aux;
        
        Elementos = Integer.parseInt(JOptionPane.showInputDialog("Cuantos espacios tendra este arreglo?"));
        
        arreglo = new int[Elementos];
        for (int i = 0; i < Elementos; i++) {
            System.out.println((i + 1) + "Digite un numero");
            arreglo[i] = entrada.nextInt();
        }
        for(int i = 0; i < (Elementos - 1); i++){
            for(int j = 0; j < (Elementos - 1); j++){
                if (arreglo[j] > arreglo[j + 1]){
                    aux = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = aux;
                }
            }
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
    }
    
}
