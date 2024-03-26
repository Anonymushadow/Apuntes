//si no hay herencia no hay polimorfismo
//poimorfismo = un objeto de la superclase puede almacenar un objeto de cualquiera de sus subclasses (hijos)
//clase padre es compatible con los que derivan de ella pero  no al revez
// poli -> muchos / morfismo -> forma
//las muchas formas que puede tomar un objeto

package pkg13.sobreescriturademiembros;
public class Principal{
    public static void main(String[] args){
        Vehiculo misVehiculos[] = new Vehiculo[4];
        
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
