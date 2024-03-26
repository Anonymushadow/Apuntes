Module Module1

    Sub Main()
        Dim resultado As Integer
        Dim numero As Integer = 50
        Dim buleano As Boolean
        '1 = true'
        '2 = false'

        'suma'
        resultado = 1 + 2
        Console.WriteLine(resultado)

        'resta'
        resultado = 12 - 2
        Console.WriteLine(resultado)

        'multiplicacion'
        resultado = 23 * 2
        Console.WriteLine(resultado)

        'division'
        resultado = 30 / 2
        Console.WriteLine(resultado)

        'resto'
        resultado = 31 Mod 2
        Console.WriteLine(resultado)

        'incremento'
        numero += numero
        Console.WriteLine(resultado)

        'decremento'
        numero -= numero
        Console.WriteLine(resultado)

        'mayor'
        buleano = 1 > 2
        Console.WriteLine(resultado)

        'menor'
        buleano = 1 < 2
        Console.WriteLine(resultado)

        'distinto'
        buleano = 1 <> 2
        Console.WriteLine(resultado)

        'igual'
        buleano = 1 = 2
        Console.WriteLine(resultado)

        'y'
        buleano = 1 < 5 And 2 < 5
        Console.WriteLine(resultado)

        'o'
        buleano = 1 < 3 Or 2 < 0
        Console.WriteLine(resultado)

        'not'
        buleano = Not 2 < 6
        Console.WriteLine(resultado)


        Console.ReadKey(True)
    End Sub

End Module
