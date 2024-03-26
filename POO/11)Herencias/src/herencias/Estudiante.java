//Estudiantes hereda de Personas
package herencias;
public class Estudiante extends Persona{
    private int codigoEstudiante;
    private float notaFinal;
    
    //metodo constructor de Estudiante = parametros = atributos de persona y de estdiantes
    public Estudiante(String nombre, String apellido, int edad, int codigoEstudiante, float notaFinal){
      super(nombre, apellido, edad);
      this.notaFinal = notaFinal;
      this.codigoEstudiante = codigoEstudiante;
    }
    
    
    public void mostrarDatos(){
        System.out.println("Nombre: " + getNombre());
        System.out.println("Apellido: " + getApellido());
        System.out.println("Edad: " + getEdad());
        System.out.println("Codigo: " + codigoEstudiante);
        System.out.println("Nota final: " + notaFinal);
    }
}
