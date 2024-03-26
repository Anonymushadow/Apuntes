package pkg13.DownCasting;
public class Turismo extends Vehiculo{
    private int puertas;
    
    public Turismo(String matricula, String marca, String modelo, int puertas) {
        super(matricula, marca, modelo);
        this.puertas = puertas;
    }

    public int getPuertas() {
        return puertas;
    }
    
    
    @Override
    public String mostrarDatos(){
        return "Matricula: " + matricula + "\nMarca: " + marca + "\nModelo: " + modelo + "\nPuertas: " + puertas;
    }
}
