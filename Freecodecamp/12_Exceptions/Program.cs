class excepciones
{
    static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Ingrese un numero");
            int number = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Ingrese un segundo numero");
            int number2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(number / number2);
        }catch(Exception ex)
        {
            Console.WriteLine("Pendejo " + ex.Message);
        }
    }
}