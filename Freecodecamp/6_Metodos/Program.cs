class Metodos
{
    //metodo main que se ejecuta apenas comienza el programa
    static void Main(String[] args)
    {
        SayHi();
        SaySomething("John", 36);
        SayBye("Mike");
        int suma = Sumar(2, 4);
        Console.WriteLine(suma);
        Console.ReadLine();
    }

    static void SayHi()
    {
        Console.WriteLine("Hello user");
    }

    static void SaySomething(String name, int age)
    {
        Console.WriteLine("Hello user " + name + ", you have " + age + " years old");
    }

    static void SayBye(String name)
    {
        Console.WriteLine("Hello user " + name);
    }

    //Return

    static int Sumar(int num, int num2) {
        int resultado = num + num2;
        return resultado;
    }
}