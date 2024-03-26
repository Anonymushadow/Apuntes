package pkg5.throwexception;
    //throw para excepciones personalizadas --> throws != throw
    //throw = crear una excepcion a tu gusto  
    public class ThrowException extends Exception{
        public ThrowException(){
            super("Se ha introducio el numero 0");
        }
    }