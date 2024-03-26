//Upcasting o conversion ascendente de tipos
//convertir objetos de las subclases en un objeto de la superclase

package pkg13.sobreescriturademiembros;
public class Principal{
    public static void main(String[] args){
        Vehiculo misVehiculos[] = new Vehiculo[4];
        Turismo miVehiculo = new Turismo("GA27", "BMW", "A53", 2);
        //referencia - nombre - instanciacion
        
        //aca guardas dentro del objeto vehiculo el objeto de miVehiculo de la clase tuismo 
        Vehiculo vehiculo = miVehiculo;
        
        //otra forma de hacerlo
        Vehiculo coche = new Turismo("GA27", "BMW", "A53", 2);
        
        System.out.println(vehiculo);
        System.out.println(coche);
        
        misVehiculos[0] = new Vehiculo("GH67", "Ferrari", "A89");
        misVehiculos[1] = new Turismo("GH67", "Ferrari", "A89", 4);
        misVehiculos[2] = new Deportivo("GH67", "Ferrari", "A89", 500);
        misVehiculos[3] = new Furgoneta("GH67", "Ferrari", "A89", 2000);
        
        for(Vehiculo vehiculos: misVehiculos){
            System.out.println(vehiculos.mostrarDatos());
            System.out.println("");
        }
    }
}
