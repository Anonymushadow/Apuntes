using _13_Clases;

class clases_y_objetos
{
    static void Main(string[] args)
    {
        Book libro = new Book();
        libro.title = "El libro";
        libro.author = "Picasso";
        libro.year = 1990;

        Console.WriteLine(libro.title);

        Book__constructor Nuevo_libro = new Book__constructor("The book", "Unknown", 1980);
        Console.WriteLine(Nuevo_libro.title);


        Book_Method Libro_con_metodo = new Book_Method("The method", "Unknown", 1900);
        Console.WriteLine(Libro_con_metodo.estaDisponible(0));
    }
}