package pkg4.trycatch;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import javax.swing.JOptionPane;


    //declarar la excepcion 
public class TryCatch{
    ///para declarar mas de una excepcion poner coma y las otras excepciones  throws x,z,y,n...
    public void leerArchivos()throws FileNotFoundException, IOException {
        //throws devuelve el error
    File archivo = new File("F:\\Lenguajes\\7_Java\\API\\API.txt");
    FileReader fr = new FileReader(archivo);
    }
    
    //try catch = para excepciones de IOExcepcion/verificadas

    public void leerArchivos2() {
    try{    
        File archivo2 = new File("F:\\Lenguajes\\7_Java\\API\\API.txt");
        FileReader fr = new FileReader(archivo2);
    //se pone el error que puede contener y se le pone un nombre
    }catch(FileNotFoundException ex){
        JOptionPane.showMessageDialog(null, "Lo sentimos pero no se pudo encontrar el archivo ");
    }catch(IOException ex2){
        JOptionPane.showMessageDialog(null, "Lo sentimos pero no se ha producido un IOException ");
    }
    }
    
    //try catch = para excepciones de RunTimeExceptions/No verificadas
    public void operaciones(){
        int num = 5;
        int num2 = 0;
        int resultado = num/num2;
        System.out.println(resultado);
    }
    
    public void operaciones2(){
        try{
        operaciones();
        }catch(ArithmeticException ex){
            System.out.println("Ha ocurrido un error " + ex);
        }
        System.out.println("Operacion Terminada ");
    }
    
    
}

