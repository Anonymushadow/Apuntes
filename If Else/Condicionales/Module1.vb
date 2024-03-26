Module Module1

    Sub Main()
        Console.WriteLine("introduzca un numero")
        Dim numero As Integer = Console.ReadLine()
        'if else'
        If (numero < 50) Then
            Console.WriteLine("el numero es menor a 50")
        Else
            Console.WriteLine("el numero es mayor a 49")
        End If


        'elseif'
        Console.WriteLine("introduzca otro numero")
        numero = Console.ReadLine()
        If (numero < 50) Then
            Console.WriteLine("el numero es menor a 50")
        ElseIf (numero = 50) Then
            Console.WriteLine("el numero es 50")
        Else
            Console.WriteLine("el numero es mayor a 50")
        End If
        Console.ReadKey(True)
    End Sub


End Module
