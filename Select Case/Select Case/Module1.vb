Module Module1

    Sub Main()
        Console.WriteLine("ingrese su genero")
        Dim variable1 As String = Console.ReadLine()
        Select Case variable1
            Case "masculino"
                Console.WriteLine("eres hombre")
                Console.ReadKey(True)
            Case "femenino"
                Console.WriteLine("eres mujer")
                Console.ReadKey(True)
            Case Else
                Console.WriteLine("esto no es un genero valido")
                Console.ReadKey(True)
        End Select
    End Sub

End Module
