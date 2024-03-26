Module Module1

    Sub Main()
        'declarar variable'
        'forma 1'
        Dim Variable1 As String = "esto contiene un texto"

        'forma 2'
        Dim variable2 As String
        variable2 = "otro texto"

        'declarar constantes'
        'colocar las constantes en mayusucla sirve como buena practica'
        Const PULGADA As Double = 2.54
        'las constantes deben tener algo desde que se definen'

        Console.WriteLine(Variable1)
        Console.WriteLine(variable2)
        Console.WriteLine(PULGADA)

        'visual basic no es key sensitive'
        'concatenar variables'
        Dim nombre1 As String = "Maria"
        Dim nombre2 As String = "Pedro"
        Dim nombre3 As String

        nombre3 = nombre1 + " " + nombre2

        Console.WriteLine(nombre3)

        Console.WriteLine("introduzca su edad")
        Dim edad As Integer = Console.ReadLine()
        'concatenas con &'
        Console.WriteLine("usted tiene " & edad & " años")
        Console.ReadKey(True)
        'write = escribe'
        'writeline = escribe y salta de linea'
    End Sub

End Module
