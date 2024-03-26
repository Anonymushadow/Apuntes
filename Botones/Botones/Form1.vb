Public Class Form1

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label1.Click

    End Sub

    Private Sub Label2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label2.Click

    End Sub

    Private Sub btn1_Click_1(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btn1.Click
        Dim num1, num2, suma As Integer

        num1 = TextBox1.Text
        num2 = TextBox2.Text

        suma = num1 + num2

        MsgBox("el resultado es " & suma)
    End Sub
End Class
