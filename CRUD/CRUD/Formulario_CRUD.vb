Imports System.Data.SqlClient
Public Class Formulario_CRUD
    Private Sub Titulo_Click(sender As Object, e As EventArgs) Handles Titulo.Click

    End Sub

    Private Sub btnForm_Click(sender As Object, e As EventArgs) Handles btnForm.Click
        Close()
    End Sub

    'variable para el eje x y eje y
    Dim ex, ey As Integer
    Dim Arrastre As Boolean

    Private Sub TituloBG_MouseDown(sender As Object, e As MouseEventArgs) Handles TituloBG.MouseDown
        'se toma el eje x de donde se esta presionando
        ex = e.X
        'se toma el eje y de donde se esta presionando
        ey = e.Y
        Arrastre = True
    End Sub

    Private Sub TituloBG_MouseMove(sender As Object, e As MouseEventArgs) Handles TituloBG.MouseMove
        'si el arrastre esta activado...
        If Arrastre Then
            'modificamos la localizacion 
            'generamos una nueva posicion dle formulario
            'tomamos ka posicion del mouse en x, tomamos la posicion del form en x, tomamos la posicion de donde se hizo click en x y se resta todo
            'tomamos ka posicion del mouse en y, tomamos la posicion del form en y, tomamos la posicion de donde se hizo click en y y se resta todo
            Me.Location = Me.PointToScreen(New Point(Formulario_CRUD.MousePosition.X - Me.Location.X - ex, Formulario_CRUD.MousePosition.Y - Me.Location.Y - ey))
        End If
    End Sub

    Private Sub PictureBox2_Click(sender As Object, e As EventArgs) Handles Añadir.Click
        'al hacer click se muestra el panel
        PanelDatos.Visible = True
        'el boton d emodificar va a estar desabilitado
        btnModify.Enabled = False
        inputID.Focus()
    End Sub

    Private Sub lblId_Click(sender As Object, e As EventArgs) Handles lblId.Click

    End Sub

    Private Sub TituloBG_MouseUp(sender As Object, e As MouseEventArgs) Handles TituloBG.MouseUp
        'cambiamos Arrastre a falso para que no se pueda arrastrar
        Arrastre = False
    End Sub


    Private Sub btnCancel_Click(sender As Object, e As EventArgs) Handles btnCancel.Click
        btnSave.Enabled = True
        btnModify.Enabled = True
        PanelDatos.Visible = False
        limpiar()
    End Sub
    Private Sub limpiar()
        inputID.Clear()
        inputName.Clear()
        inputTelefono.Clear()
        inputDireccion.Clear()
        inputObservasiones.Clear()
        inputID.Focus()
    End Sub


    Private Sub btnSave_Click(sender As Object, e As EventArgs) Handles btnSave.Click
        'creamos un comnado de sql
        Dim cmd As New SqlCommand
        'verificacios que los campos no esten vacios
        If inputName.Text <> "" And inputID.Text <> "" Then
            'usamos un try catch por si hay errores
            Try
                'abrimos la conexion
                Abrir_conexion()
                'llamamos al procedimiento almacenado correspondiente
                'tenemos que introducir el comando sql y la conexion
                cmd = New SqlCommand("Insertar_lector", conexion)
                cmd.CommandType = 4

                'enviamos los parametros (las variables)
                cmd.Parameters.AddWithValue("@idLector", inputID.Text.ToString)
                cmd.Parameters.AddWithValue("@Nombre", inputName.Text.ToString)
                cmd.Parameters.AddWithValue("@Telefono", inputTelefono.Text)
                cmd.Parameters.AddWithValue("@Direccion", inputDireccion.Text.ToString)
                cmd.Parameters.AddWithValue("@Observaciones", inputObservasiones.Text.ToString)
                'ejecutamos la consulta
                cmd.ExecuteNonQuery()
                'cerramos la conexion
                Cerrar_conexion()
                'cerramos el palnelDatos
                PanelDatos.Visible = False
                'vaciamos los inputs
                limpiar()
                Mostrar()
            Catch ex As Exception
            End Try
        Else
            MsgBox("Los campos ID y Nombre son obligatorios", vbOKOnly)
        End If
    End Sub

    Private Sub Formulario_CRUD_Load(sender As Object, e As EventArgs) Handles Me.Load
        Abrir_conexion()
        Mostrar()
    End Sub


    Private Sub busqueda_TextChanged(sender As Object, e As EventArgs) Handles busqueda.TextChanged
        Buscar()
        PanelDatos.Visible = False
    End Sub

    'buscar registros
    Sub Buscar()
        Dim dt As New DataTable
        Dim da As SqlDataAdapter

        Try
            Abrir_conexion()
            da = New SqlDataAdapter("Buscar_lector", conexion)
            da.SelectCommand.CommandType = 4
            da.SelectCommand.Parameters.AddWithValue("@Busqueda", busqueda.Text)
            da.Fill(dt)
            DataLectores.DataSource = dt
            Cerrar_conexion()
            'estilos de las columnas
            DataLectores.Columns(0).Width = 25
            DataLectores.Columns(1).Width = 100
            DataLectores.Columns(2).Width = 250
            DataLectores.Columns(3).Width = 100
            DataLectores.Columns(4).Width = 300
            DataLectores.Columns(5).Width = 300
            'estilos de los encabezados
            DataLectores.EnableHeadersVisualStyles = False
            Dim estilo As DataGridViewCellStyle = New DataGridViewCellStyle()
            estilo.BackColor = Color.White
            estilo.ForeColor = Color.Black
            estilo.Font = New Font("Segoe UI", 10, FontStyle.Bold Or FontStyle.Regular)
            DataLectores.ColumnHeadersDefaultCellStyle = estilo
        Catch ex As Exception

        End Try
    End Sub

    'mostramos los registros
    Sub Mostrar()
        Dim dt As New DataTable
        Dim da As SqlDataAdapter

        Try
            Abrir_conexion()
            da = New SqlDataAdapter("Mostrar_lector", conexion)
            da.Fill(dt)
            DataLectores.DataSource = dt
            Cerrar_conexion()
            'estilos de las columnas
            DataLectores.Columns(0).Width = 25
            DataLectores.Columns(1).Width = 100
            DataLectores.Columns(2).Width = 250
            DataLectores.Columns(3).Width = 100
            DataLectores.Columns(4).Width = 300
            DataLectores.Columns(5).Width = 300
            'estilos de los encabezados
            DataLectores.EnableHeadersVisualStyles = False
            Dim estilo As DataGridViewCellStyle = New DataGridViewCellStyle()
            estilo.BackColor = Color.White
            estilo.ForeColor = Color.Black
            estilo.Font = New Font("Segoe UI", 10, FontStyle.Bold Or FontStyle.Regular)
            DataLectores.ColumnHeadersDefaultCellStyle = estilo
        Catch ex As Exception

        End Try
    End Sub

    Private Sub btnModify_Click(sender As Object, e As EventArgs) Handles btnModify.Click
        'creamos un comnado de sql
        Dim cmd As New SqlCommand
        'verificacios que los campos no esten vacios
        If inputName.Text <> "" And inputID.Text <> "" Then
            'usamos un try catch por si hay errores
            Try
                'abrimos la conexion
                Abrir_conexion()
                'llamamos al procedimiento almacenado correspondiente
                'tenemos que introducir el comando sql y la conexion
                cmd = New SqlCommand("Editar_lector", conexion)
                cmd.CommandType = 4

                'enviamos los parametros (las variables)
                cmd.Parameters.AddWithValue("@idLector", inputID.Text.ToString)
                cmd.Parameters.AddWithValue("@Nombre", inputName.Text.ToString)
                cmd.Parameters.AddWithValue("@Telefono", inputTelefono.Text)
                cmd.Parameters.AddWithValue("@Direccion", inputDireccion.Text.ToString)
                cmd.Parameters.AddWithValue("@Observaciones", inputObservasiones.Text.ToString)
                'ejecutamos la consulta
                cmd.ExecuteNonQuery()
                'cerramos la conexion
                Cerrar_conexion()
                'cerramos el palnelDatos
                PanelDatos.Visible = False
                'vaciamos los inputs
                limpiar()
                Mostrar()
            Catch ex As Exception
            End Try
        Else
            MsgBox("Los campos ID y Nombre son obligatorios", vbOKOnly)
        End If
    End Sub



    Private Sub DataLectores_CellContentDoubleClick(sender As Object, e As DataGridViewCellEventArgs) Handles DataLectores.CellContentDoubleClick
        PanelDatos.Visible = True
        Try
            inputID.Text = DataLectores.SelectedCells.Item(1).Value
            inputName.Text = DataLectores.SelectedCells.Item(2).Value
            inputTelefono.Text = DataLectores.SelectedCells.Item(3).Value
            inputDireccion.Text = DataLectores.SelectedCells.Item(4).Value
            inputObservasiones.Text = DataLectores.SelectedCells.Item(5).Value
            btnSave.Enabled = False
            btnModify.Enabled = True
        Catch ex As Exception

        End Try
    End Sub

    Private Sub DataLectores_CellContentClick(sender As Object, e As DataGridViewCellEventArgs) Handles DataLectores.CellContentClick
        'verificar si se ha dado click sobre la columna de eliminar
        If e.ColumnIndex = DataLectores.Columns.Item("Delete").Index Then
            Dim result As DialogResult
            result = MsgBox("El Registro sera eliminado permanentemente, ¿esta seguro de esta accion?", vbQuestion + vbOKCancel, "Sistema de lectores")
            If result = DialogResult.OK Then
                Dim cmd As SqlCommand
                Try
                    Abrir_conexion()
                    cmd = New SqlCommand("Eliminar_Lector", conexion)
                    cmd.CommandType = 4
                    cmd.Parameters.AddWithValue("@idLector", DataLectores.SelectedCells.Item(1).Value)
                    cmd.ExecuteNonQuery()
                    Cerrar_conexion()
                    Mostrar()
                Catch ex As Exception

                End Try
            Else
                MsgBox("Eliminacion Cancelada", vbOKOnly)
            End If
        End If
    End Sub
End Class
