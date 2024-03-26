package cicloforeach;
import javax.swing.JOptionPane;
import java.util.Scanner;
public class CicloForEach {
    public static void main(String[] args) {
        String[] nombres = {"Maria", "Luis", "Roberto", "Juan", "Liliana"};
        for(String i:nombres){//imprime todo lo del arreglo, se guarda en cada espacio un elemento
            System.out.println(i);
        };
    }
    
}
