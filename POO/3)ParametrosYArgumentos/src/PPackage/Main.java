package PPackage;
import javax.swing.JOptionPane;

/**9
 *
 * @author ASUS
 */
public class Main {
    public static void main(String[] args){
        int n1 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero "));
        int n2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese otro numero "));
        
        Operacion op = new Operacion();
        op.sumar(n1, n2);
        op.restar(n1, n2);
        op.mult(n1, n2);
        op.div(n1, n2);
        op.mostrar();
    }
}
