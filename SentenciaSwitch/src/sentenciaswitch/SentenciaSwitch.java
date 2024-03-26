package sentenciaswitch;
import javax.swing.JOptionPane;
public class SentenciaSwitch {
    public static void main(String[] args) {
        int dato = Integer.parseInt(JOptionPane.showInputDialog("Diga un numero del uno a 5"));
        switch (dato){
            case 1: JOptionPane.showMessageDialog(null, "tu numero es " + dato);    
            break;
            case 2: JOptionPane.showMessageDialog(null, "tu numero es " + dato);    
            break;
            case 3: JOptionPane.showMessageDialog(null, "tu numero es " + dato);    
            break;
            case 4: JOptionPane.showMessageDialog(null, "tu numero es " + dato);    
            break;
            case 5: JOptionPane.showMessageDialog(null, "tu numero es " + dato);    
            break;
            default: JOptionPane.showMessageDialog(null, "tu numero esta duera del rago, es " + dato);    
            break;
        }
    }
    
}
