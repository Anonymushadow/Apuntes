//Downcasting o conversion descendente de tipos
//convertir objetos de las subclases en un objeto de la superclase

package pkg13.DownCasting;
public class Principal{
    public static void main(String[] args){
        //upcasting
        Vehiculo coche = new Turismo("GA27", "BMW", "A53", 2);
        
        //downcasting
        Turismo vehiculoT = (Turismo) coche;
        //transformar un objeto de vehiculo a Turismo
        //para hacer downcasting primero hay que tener un upcasting
        
        
        Vehiculo vehiculoDep = new Deportivo("AB90", "BMW", "HI9", 500);
        Deportivo nuevoDep = (Deportivo) vehiculoDep;
        
        //(transformar a ) nombre del objeto a transformar
        
        System.out.println(vehiculoT);
        System.out.println(nuevoDep);
        
    }
}
