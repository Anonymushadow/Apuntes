/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package files;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Nahuel
 */
public class Files {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Files av = new Files();
        av.crearArchivo();
        av.crearDirectorio();
        av.escribirTexto();
        av.añadirText();
        av.leerArchivo();
        //ruta absoluta = D:\Lenguajes\7_Java\Files\pruebas.txt
        //ruta relativa = funciona si el archivo esta dentro dle programa 
        //ruta relativa = prueba.txt
        File archivo = new File("D:\\Lenguajes\\7_Java\\Files\\pruebas.txt");
        
        if (archivo.exists()) {
            System.out.println("El archivo existe");
            System.out.println("La ruta absoluta es: " + archivo.getAbsolutePath());
            System.out.println("Es un archivo?: " + archivo.isFile());
            System.out.println("Este archivo se puede leer?: " + archivo.canRead());
        }else{
            System.out.println("El archivo no existe");
        }
        
        //directorio = carpeta
        File directorio = new File("CarpetaPrueba");
        if (directorio.exists()) {
            System.out.println("El directorio existe");
            System.out.println("La ruta absoluta es: " + directorio.getAbsolutePath());
            System.out.println("Es un directorio?: " + directorio.isDirectory());
            System.out.println("Este directorio se puede leer?: " + directorio.canRead());
        }else{
            System.out.println("El directorio no existe");
        }
}
    
    //crear archivos
    File arch;
        private void crearArchivo(){
            arch = new File("archivo.txt");
        try {
            if (arch.createNewFile()) {
                System.out.println("Archivo creado exitosamente");
            }
        } catch (IOException ex) {
            System.out.println("No se pude crear el archivo");
        }
        }
        
        //crear directorios
        private void crearDirectorio(){
            File direct = new File("Carpeta Pruebas");
            
            if (direct.mkdir()) {
                System.out.println("Se ha creado el directorio exitosamente");
            }else{
                System.out.println("Lo sentimos pero surgio un error al crear el directorio");
            }
        }
        
        private void escribirTexto(){
        try {
            FileWriter escribir = new FileWriter(arch);//en los parentesis se indica el archivo a escribir
            escribir.write("Hola Que Tal");
            escribir.close();;
        } catch (IOException ex) {
            System.out.println("Error");
        }
            
        }
        
        private void añadirText(){
            try {
            FileWriter escribir = new FileWriter(arch, true);//añadir en vez de sobreescribir
            escribir.write("\r\ntexto añadido");
            escribir.close();;
        } catch (IOException ex) {
            System.out.println("Error");
        }
        }
        
        private void leerArchivo(){
            String cadena;
        try {
            FileReader lector = new FileReader(arch);
            BufferedReader lectura = new BufferedReader(lector);
            
            while (cadena != null){
                System.out.println(cadena);
                cadena = lectura.readLine();//leer la primera linea
            }
        } catch (FileNotFoundException ex) {
            System.out.println("Error " + ex);
        } catch (IOException e) {
            System.out.println("Error " + e);
        }
        }
}
