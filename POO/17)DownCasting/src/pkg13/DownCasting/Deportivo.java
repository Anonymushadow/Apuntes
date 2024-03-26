package pkg13.DownCasting;
public class Deportivo extends Vehiculo{
    private int carga;
    
    public Deportivo(String matricula, String marca, String modelo, int carga) {
        super(matricula, marca, modelo);
        this.carga = carga;
    }

    public int getPuertas() {
        return carga;
    }
    
    
    @Override
    public String mostrarDatos(){
        return "Matricula: " + matricula + "\nMarca: " + marca + "\nModelo: " + modelo + "\nCarga: " + carga;
    }    
}
