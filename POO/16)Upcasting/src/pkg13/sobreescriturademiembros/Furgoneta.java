package pkg13.sobreescriturademiembros;
public class Furgoneta extends Vehiculo{
    private int cilindrada;
    
    public Furgoneta(String matricula, String marca, String modelo, int cilindrada) {
        super(matricula, marca, modelo);
        this.cilindrada = cilindrada;
    }

    public int getPuertas() {
        return cilindrada;
    }
    
    
    @Override
    public String mostrarDatos(){
        return "Matricula: " + matricula + "\nMarca: " + marca + "\nModelo: " + modelo + "\nCilindrada: " + cilindrada;
    }    
}
