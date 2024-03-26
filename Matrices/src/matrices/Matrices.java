package matrices;

import java.util.Scanner;
import javax.swing.JOptionPane;
public class Matrices {
    public static void main(String[] args) {
         Scanner entrada = new Scanner(System.in);
        int matriz2[][],filas,columnas;
   
        filas = Integer.parseInt(JOptionPane.showInputDialog("Introduzca el numero de filas: "));
        columnas = Integer.parseInt(JOptionPane.showInputDialog("Introduzca el numero de columnas: "));
        matriz2 = new int[filas][columnas];
        
        for (int i = 0; i < filas; i++) {//numero de filas
            for (int j = 0; j < columnas; j++) {//numero de columnas
                System.out.print("matriz2[" + i + "][" + j + "]: ");
                matriz2[i][j] = entrada.nextInt();
            }
            System.out.println("");
        }
        
        for (int i = 0; i < filas; i++) {//numero de filas
            for (int j = 0; j < columnas; j++) {//numero de columnas
                System.out.print(matriz2[i][j]);
            }
            System.out.println("");
        }
    }
    
}


        /*int matriz[][] = {{1,2,3},{4,5,6},{7,8,9}};//matriz de tres filas con 3 elementos cada una
        
        for (int i = 0; i < 3; i++) {//numero de filas
            for (int j = 0; j < 3; j++) {//numero de columnas
                System.out.print(matriz[i][j]);
            }
            System.out.println("");
        }*/
