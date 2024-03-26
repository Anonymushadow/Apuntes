package dolares;
import java.util.Scanner;
public class Dolares {
   
    public static void main(String[] args) {
        float guillermo = 0, luis, juan, total;
        Scanner entrada = new Scanner(System.in);
        System.out.println("cuanto dinero tiene guillermo? ");
        guillermo = entrada.nextFloat();
        luis = guillermo/2;
        juan = (luis + guillermo)/2;
        
        
        total = guillermo + luis + juan;
        
        System.out.println("El total es de " + total);
    }
    
}
