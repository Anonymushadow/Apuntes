Module Module1

    Sub Main()
        'las matrices son como arrays pero con filas y columnas'
        Dim numero(2, 3) As Integer 'dos filas y tres columnas'
        Dim numeros = New Integer(,) {{25, 45, 64, 67, 89}, {45, 35, 90, 88, 45}}
        'las llaves externas son la tabla, cada llaves dentro son las filas 
        'tabla{{fila 1}, {fila2}, {fila3}}'

        For filas = 0 To 1 Step 1
            For columna = 0 To 2 Step 1
                Console.WriteLine("ingrese el numero en la posicion " & filas & ", " & columna & "--->")
                numero(filas, columna) = Console.ReadLine()
            Next
        Next

        For i = 0 To 1 Step 1
            Console.WriteLine("fila " & numero(i, 0))
            For e = 0 To 2 Step 1
                Console.WriteLine("columna " & numero(i, e))
            Next
        Next
        Console.ReadKey(True)
    End Sub

End Module
