package equals;
 
public class Equals {
    public static void main(String[] args) {
        // tipos primitivos:
        int valor = 25;
        int valor2 = 25;
        System.out.println(valor == valor2);
        
        Equals persona = new Equals();
        Equals persona2 = new Equals();
        System.out.println(persona == persona2);
        //falso  xque son dos objetos diferentes en distintas partes de la memoria
        
        
        //hashCode = es un codigo numerico que hace referencia a la ubicacion del objeto en el heap
        //clase x = new clase(); -> espacio en el heap pero en el stack se guarda una referencia
        //clase z = new clase(); -> espacio en el heap pero en el stack se guarda una referencia
        //x = x; -> cambia la referencia, apunta desde dos instancias diferentes hacia un mismo heap
        
        //hashCode()
        Libro libro3 = new Libro("SQL", "Pablo", 22);
        Libro libro4 = new Libro("SQL", "juan", 22);
        
        System.out.println(libro3.hashCode());
        System.out.println(libro4.hashCode());
                
        libro3 = libro4;
        System.out.println(libro3.hashCode());
        System.out.println(libro4.hashCode());
                
        //equals = verifica si dos objetos son equivalentes
        //equivalentes = tiene los mismos comportamientos
        
        
        //equals define que caractersticas debe tener para que sea igual a otro
        
        Libro libro1 = new Libro("Java", "Pablo", 49);
        Libro libro2 = new Libro("Java", "juan", 49);
        
        System.out.println(libro1.equals(libro2));
        
        
        
    }
    
}
