using _15_Static;

class estatico
{
    static void Main(string[] args) {
        Song hollyday = new Song("HollyDay", "Green Day", 200);
        Song Pink_Rover = new Song("Pink Rover", "Scene Queen", 200);

        Console.WriteLine(Song.counter);
        Console.WriteLine(Pink_Rover.getCounter());

        Toolkit.SayHi();
    }
}