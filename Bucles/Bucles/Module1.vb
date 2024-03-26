Module Module1

    Sub Main()
        Dim i As Integer = 0
        'bucle for'
        Console.WriteLine("bucle For")
        For i = 0 To 10 Step 1
            Console.WriteLine(i)
        Next


        'bucle while'
        Console.WriteLine("bucle While")
        i = 0
        While (i < 20)
            Console.WriteLine(i)
            i = i + 1
        End While


        'bucle do loop until'
        Console.WriteLine("bucle Do Loop Until")
        i = 0
        Do
            Console.WriteLine(i)
            i = i + 1
        Loop Until (i > 30)


        'bucle do loop While'
        Console.WriteLine("bucle Do Loop While")
        i = 0
        Do
            Console.WriteLine(i)
            i = i + 1
        Loop While (i < 10)


        'bucles anidados'
        'son bucles dentro de bucles'
        Console.WriteLine("bucles anidados")
        For i = 1 To 2 Step 1
            Console.WriteLine("este es el mensaje del primer bucle")
            For j = 1 To 3 Step 1
                Console.WriteLine("este es el mensaje del segundo bucle")
            Next
        Next

        'Bucle for each'
        Dim datos = New String() {"dato1", "dato2", "dato3", "dato4"}
        Console.WriteLine("For Each")
        For Each nom As String In datos
            Console.WriteLine(nom)
        Next
        Console.ReadKey(True)
    End Sub


End Module
