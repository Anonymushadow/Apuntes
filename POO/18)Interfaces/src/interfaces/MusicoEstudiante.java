package interfaces;
public class MusicoEstudiante implements Estudiante, Musico{
    
    
    @Override
    public void hablar(){
        System.out.println("Estoy hablando");
    }
    
    @Override
    public void tocarMusica(){
        System.out.println("Estoy tocando la guitarra");
    }
    
    @Override
    public void estudiar(){
        System.out.println("Estoy estudiando");
    }
}
