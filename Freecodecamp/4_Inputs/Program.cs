Console.WriteLine("Name: ");
string name = Console.ReadLine();
Console.WriteLine("Hi " + name);

Console.WriteLine("Convertir un numero a string");
Console.WriteLine("Number: ");
string numberInput = Console.ReadLine();
int number = int.Parse(numberInput);
string numberToText = number.ToString();
Console.WriteLine(numberToText + 2);

Console.WriteLine("Convertir un string a entero");
int num = Convert.ToInt32("42");
Console.WriteLine(num - 2);

Console.WriteLine("Ejemplo de calculadora que multiplica por 2");
Console.Write("Introduzca un numero: ");
int numeroSinMultiplicar = Convert.ToInt32(Console.ReadLine());
int numeroMultiplicado = numeroSinMultiplicar * 2;
Console.WriteLine(numeroMultiplicado);


//podemos definir varias variables de una
string lastName, firstName, other;