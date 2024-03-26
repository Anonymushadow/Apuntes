package bin;

import java.io.EOFException;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Binarios {
    
    private void escribir(){
        try {
            FileOutputStream archivo = new FileOutputStream("Personas.bin");//la extencion puede ser cualquiera
            ObjectOutputStream escritura = new ObjectOutputStream(archivo);   
            
            
            Persona persona1 = new Persona("Alejandro", 30);
            Persona persona2 = new Persona("Valentina", 22);
            Persona persona3 = new Persona("Pablo", 60);
            
            escritura.writeObject(persona1);//escribimos objeto en el binario
            escritura.writeObject(persona2);
            escritura.writeObject(persona3);
            
            escritura.close();//cerramos el archivo
        } catch (FileNotFoundException ex) {
            System.err.println("Error: " + ex);
        }catch(IOException ex){
            System.err.println("Error: " + ex);
        }
    }
    
    private void añadirTexto(){
        try {
            FileOutputStream archivo = new FileOutputStream("Personas.bin", true);//true --> agregar   false --> reemplazar
            AñadirObjetos  escritura = new AñadirObjetos(archivo);   
            
            
            Persona persona1 = new Persona("Juan", 10);
            Persona persona2 = new Persona("Juana", 12);
            Persona persona3 = new Persona("Romina", 80);
            
            
            escritura.writeObject(persona1);
            escritura.writeObject(persona2);
            escritura.writeObject(persona3);
            
            escritura.close();//cerramos el archivo
        } catch (FileNotFoundException ex) {
            System.err.println("Error: " + ex);
        }catch(IOException ex){
            System.err.println("Error: " + ex);
        }
    }
    
    private void leerBinario(){
        Persona persona;
        try {
            FileInputStream archivo = new FileInputStream("personas.bin");
            ObjectInputStream lectura = new ObjectInputStream(archivo);
            
            while(true){
                persona = (Persona) lectura.readObject();
                persona.mostrarDatos();
            }
        } catch (EOFException ex) {
            return;//Finalizo de leer el archivo bin
        } catch (FileNotFoundException ex) {
            System.err.println("Error: " + ex);
        } catch (IOException ex){
            System.err.println("Error: " + ex);
        } catch (ClassNotFoundException ex){
            System.err.println("Error: " + ex);
        }
    }
    
    public static void main(String[] args) {
        Binarios archivoBinario = new Binarios();
        
        archivoBinario.escribir();
        archivoBinario.añadirTexto();
        archivoBinario.leerBinario();
    }
}
