Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        saludar()
    End Sub

    Sub saludar()
        MsgBox("Soy Una Funcion")
    End Sub

    Function retornaSaludo()
        Dim saludo As String = "Hola, soy un procedimiento"
        Return saludo
    End Function


    Private Sub procedimiento_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles procedimiento.Click
        Dim sal As String
        sal = retornaSaludo()
        MsgBox(sal)
    End Sub

    Private Sub funcion_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles funcion.Click
        saludar()
    End Sub
End Class
