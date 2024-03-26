package areapoligonos;
import java.util.ArrayList;
import java.util.Scanner;
public class Principal {
    //tipo + ArrayList (array dinamico) + <sobre que queremos crear el arreglo> + nombbre + = + new + ArrayList + <sobre que queremos crear el arreglo>
    static ArrayList<Poligonos> poligono = new ArrayList<Poligonos>();
    static Scanner entrada = new Scanner(System.in);
    public static void main(String[] args){
        llenarPoligono();
        mostrarResultados();
    }
    
    
    
    
    public static void llenarPoligono(){
        int opcion;
        int respuesta;
        do{
            do {
                System.out.println("Digite un poligono: ");
                System.out.println("1.Triangulo");
                System.out.println("2.Rectangulo");
                System.out.println("Opcion:");
                opcion = entrada.nextInt();
            } while (opcion < 1 || opcion > 2);
            
            if (opcion == 1) {
                llenarTriangulo();
            }else{
                llenarRectangulo();
            }
            
            System.out.println("Desea introducir otro poligono?:");
            respuesta = entrada.next().charAt(0);
            System.out.println("");
            //para Strings usar '' -> misma tecla que ?
        }while(respuesta == 's' || respuesta == 'S');
    }
    
    public static void llenarTriangulo(){
        double lado1, lado2, lado3;
        System.out.println("Digite el lado 1: ");
        lado1 = entrada.nextDouble();
        System.out.println("Digite el lado 2: ");
        lado2 = entrada.nextDouble();
        System.out.println("Digite el lado 3: ");
        lado3 = entrada.nextDouble();
        
        Triangulo triangulo = new Triangulo(lado1, lado2, lado3);
        
        //añadir triangulo a poligono
        poligono.add(triangulo);
    }
    
        public static void llenarRectangulo(){
        double lado1, lado2;
        System.out.println("Digite el lado 1: ");
        lado1 = entrada.nextDouble();
        System.out.println("Digite el lado 2: ");
        lado2 = entrada.nextDouble();
        
        Rectangulo rectangulo = new Rectangulo(lado1, lado2);
        
        //añadir triangulo a poligono
        poligono.add(rectangulo);
    }
        
        public static void mostrarResultados(){
            //de que clase? + nombre + : + array a recorrer
            for(Poligonos poli: poligono){
                System.out.println(poli.toString());
                System.out.println("Area: " + poli.area());
            }
        }
}
