package paquete1;
import javax.swing.JOptionPane;
public class Cuadrilatero {
    public static void main(String[] args){
        Parametros c1;
        float lado1, lado2;
        
        lado1 = Float.parseFloat(JOptionPane.showInputDialog("Digite el lado 1"));
        lado2 = Float.parseFloat(JOptionPane.showInputDialog("Digite el lado 2"));
        
        if(lado1 == lado2){
            c1 = new Parametros(lado1);
        }else{
            c1 = new Parametros(lado1, lado2);
        }
        System.out.println("El perimetro es " + c1.getPerimetro());
        System.out.println("El area es " + c1.getArea());
    }
}
