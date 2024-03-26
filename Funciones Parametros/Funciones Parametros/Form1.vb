Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim var As String
        var = "variable sin cambiar"
        porValor(var)
    End Sub

    Sub porValor(ByVal variable As String)
        MsgBox(variable)
        variable = "variable cambiada"
        MsgBox(variable)
    End Sub

End Class
