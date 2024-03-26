Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    End Sub

    Private Sub TextBox1_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox1.KeyPress
        MsgBox(e.KeyChar.ToString)

        If e.KeyChar.ToString = "x" Then
            MsgBox("acertaste la letra")
        End If

    End Sub
End Class
