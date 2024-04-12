class while_loop
{
    static void Main(String[] args)
    {
        int i = 0;
        while(i < 10)
        {
            Console.WriteLine(i);
            i++;
        }

        i = 0;

        do
        {
            Console.WriteLine(i);
            i++;
        } while (i < 10);
    }
}