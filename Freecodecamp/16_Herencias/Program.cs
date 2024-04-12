using _16_Herencias;

class herencia
{
    static void Main(string[] args)
    {
        Chef chef = new Chef();
        chef.MakeSalad();

        ItalianChef italianChef = new ItalianChef();
        italianChef.MakeSalad();
    }
}