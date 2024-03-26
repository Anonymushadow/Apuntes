Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim resultado As Boolean

        resultado = (1 = 1) And (3 = 4)
        MsgBox(resultado)

        resultado = (1 = 1) Or (3 = 4)
        MsgBox(resultado)

        resultado = Not (3 = 4)
        MsgBox(resultado)

    End Sub
End Class
