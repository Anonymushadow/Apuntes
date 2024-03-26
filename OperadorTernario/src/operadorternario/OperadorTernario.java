package operadorternario;
import javax.swing.JOptionPane;
public class OperadorTernario {
    public static void main(String[] args) {
       String resultado; 
       int numero = Integer.parseInt(JOptionPane.showInputDialog("digite un numero"));
       resultado = (numero < 50)? "es menor a 50" : "es mayor a 50";
       JOptionPane.showMessageDialog(null, resultado);
    }
    
}
