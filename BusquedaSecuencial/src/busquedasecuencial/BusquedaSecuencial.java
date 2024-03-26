package busquedasecuencial;
import javax.swing.JOptionPane;
public class BusquedaSecuencial {
    public static void main(String[] args) {
        int arreglo[] = {4,5,2,3,1};
        int dato;
        boolean fin = false;
        dato = Integer.parseInt(JOptionPane.showInputDialog("ingrse el valor a buscar "));
        
        //busqueda secuencial
        int i = 0;
        while(i < 5 && fin == false){
            if(arreglo[i] == dato){
                fin = true;
            }
            i++;
        }
        if (fin == false) {
            System.out.println("Su dato no fue encontrado");
        }else{
            System.out.println("Su dato fue encontrado en la posicion " + (i - 1));
        }
    }
}
