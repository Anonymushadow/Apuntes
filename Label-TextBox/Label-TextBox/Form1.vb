Public Class Form1

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles etiqueta.Click

    End Sub

    Private Sub TextBox1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles TextBox.TextChanged
        TextBox.Text = "hello"
        TextBox.TextAlign = HorizontalAlignment.Center
        TextBox.Width = 300
        TextBox.Height = 20
        TextBox.Top = 100
        TextBox.Left = 100
        TextBox.Cursor = Cursors.Cross
        TextBox.RightToLeft = False
        TextBox.ReadOnly = False
    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    End Sub
End Class
