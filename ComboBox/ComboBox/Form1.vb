Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim dt As DataTable = New DataTable("Data")

        dt.Columns.Add("codigo")
        dt.Columns.Add("Descripcion")

        Dim dr As DataRow

        dr = dt.NewRow()

        dr("codigo") = 0
        dr("descripcion") = "Masculino"
        dt.Rows.Add(dr)

        dr("codigo") = 1
        dr("descripcion") = "Femenino"
        dt.Rows.Add(dr)

        cmbGenero.DataSource = dt
        cmbGenero.ValueMember = "Codigo"
        cmbGenero.DisplayMember = "Descripcion"
    End Sub
End Class
