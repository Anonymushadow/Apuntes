class switch_statement{
    static void Main(string[] args)
    {
        int option = 0;

        switch (option)
        {
            case 0:
                Console.WriteLine("Opcion numero 0");
                break;
            case 1:
                Console.WriteLine("Opcion numero 1");
                break;
            case 2:
                Console.WriteLine("Opcion numero 2");
                break;
            case 3:
                Console.WriteLine("Opcion numero 3");
                break;
            default:
                Console.WriteLine("No coincide con ninguna opcion disponible");
                break;

        }
    }
}