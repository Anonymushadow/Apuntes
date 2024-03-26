package areapoligonos;
import javax.swing.JOptionPane;
public class Rectangulo extends Poligonos{
    private double lado1;
    private double lado2;

    public Rectangulo(double lado1, double lado2) {
        //numero de lados = 2 
        super(2);
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    @Override
    public String toString() {
        //super.toString() = escribir la funcion toString de la clase padre
        return "\nRectangulo:" + "\nCantidad de Lados: " + super.toString() + "\nlado1: " + lado1 + "\nlado2: " + lado2;
    }
    
    
    @Override
    public double area(){
        return lado1*lado2;
    }
}
