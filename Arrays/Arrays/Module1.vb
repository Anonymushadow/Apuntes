Module Module1

    Sub Main()
        Dim nombres(6) As String 'este array va a tener 6 elementos'
        For i = 0 To nombres.Length - 1 Step 1
            Console.WriteLine("introduzca su nombre")
            nombres(i) = Console.ReadLine()
        Next
        Dim nombres2 = New String() {"Maria", "Pedro", "Daniela", "Juan", "Carlos", "Camila"}

        For i = 0 To 6 Step 1
            Console.WriteLine(nombres(i))
        Next
        For i = 0 To 6 Step 1
            Console.WriteLine(nombres2(i))
        Next
        Console.ReadKey(True)
    End Sub
End Module
