Public Class Form1

    Private Sub RadioButton1_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Suma.CheckedChanged
     
    End Sub

    Private Sub TextBox1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles num1.TextChanged

    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    End Sub

    Private Sub op_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles op.Click
        Dim numero1, numero2 As Integer
        Dim resultado As Double

        numero1 = num1.Text
        numero2 = num2.Text

        If (Suma.Checked) Then
            resultado = numero1 + numero2
        ElseIf (Resta.Checked) Then
            resultado = numero1 - numero2
        ElseIf (Multiplicacion.Checked) Then
            resultado = numero1 * numero2
        ElseIf (divicion.Checked) Then
            resultado = numero1 / numero2
        Else
            resultado = "error"
        End If

        MsgBox(resultado)
    End Sub
End Class
