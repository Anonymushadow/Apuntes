package equals;
public class Libro {
    
    public Libro(String titulo, String autor, int ISBN){
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
    }
    
    public String getData(){
        return "Titulo: " + titulo + "\nAutor: " + autor + "\nISBN: " + ISBN;
    }
    
    //equals siempre devuelve un booleano
    public boolean equals(Object obj){
        if(obj instanceof Libro){
        //convertimos obj en libro y lo guardamos en otro
            Libro otro = (Libro)obj;
            if(this.ISBN == otro.ISBN){
                return true;
            }else{
                return false;    
            }
        }else{
            return false;    
        }
    }
    private String titulo;
    private String autor;
    private int ISBN;
}
