Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim saludo, despedida, resultado As String
        saludo = "hola señores y señoras"
        If saludo.Contains("hola") Then
            MsgBox("saludo tiene la palabra Hola")
        End If

        despedida = "goodbye"

        resultado = StrComp(despedida, saludo)
        MsgBox(resultado)
    End Sub
End Class
