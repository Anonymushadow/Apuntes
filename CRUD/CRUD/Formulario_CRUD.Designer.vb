<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Formulario_CRUD
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(Formulario_CRUD))
        Me.TituloBG = New System.Windows.Forms.Panel()
        Me.btnForm = New System.Windows.Forms.Button()
        Me.Titulo = New System.Windows.Forms.Label()
        Me.PanelBusqueda = New System.Windows.Forms.Panel()
        Me.busqueda = New System.Windows.Forms.TextBox()
        Me.PanelContenido = New System.Windows.Forms.Panel()
        Me.PanelDatos = New System.Windows.Forms.Panel()
        Me.btnCancel = New System.Windows.Forms.Button()
        Me.btnModify = New System.Windows.Forms.Button()
        Me.btnSave = New System.Windows.Forms.Button()
        Me.inputObservasiones = New System.Windows.Forms.TextBox()
        Me.lblObservasiones = New System.Windows.Forms.Label()
        Me.inputDireccion = New System.Windows.Forms.TextBox()
        Me.lblDireccion = New System.Windows.Forms.Label()
        Me.inputTelefono = New System.Windows.Forms.TextBox()
        Me.lblTelefono = New System.Windows.Forms.Label()
        Me.inputName = New System.Windows.Forms.TextBox()
        Me.lblId = New System.Windows.Forms.Label()
        Me.inputID = New System.Windows.Forms.TextBox()
        Me.lblName = New System.Windows.Forms.Label()
        Me.DataLectores = New System.Windows.Forms.DataGridView()
        Me.PanelLateral = New System.Windows.Forms.Panel()
        Me.DataGridViewImageColumn1 = New System.Windows.Forms.DataGridViewImageColumn()
        Me.Delete = New System.Windows.Forms.DataGridViewImageColumn()
        Me.Añadir = New System.Windows.Forms.PictureBox()
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.TituloBG.SuspendLayout()
        Me.PanelBusqueda.SuspendLayout()
        Me.PanelContenido.SuspendLayout()
        Me.PanelDatos.SuspendLayout()
        CType(Me.DataLectores, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.PanelLateral.SuspendLayout()
        CType(Me.Añadir, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'TituloBG
        '
        Me.TituloBG.BackColor = System.Drawing.SystemColors.MenuHighlight
        Me.TituloBG.Controls.Add(Me.btnForm)
        Me.TituloBG.Controls.Add(Me.Titulo)
        Me.TituloBG.Dock = System.Windows.Forms.DockStyle.Top
        Me.TituloBG.Location = New System.Drawing.Point(0, 0)
        Me.TituloBG.Name = "TituloBG"
        Me.TituloBG.Size = New System.Drawing.Size(579, 52)
        Me.TituloBG.TabIndex = 0
        '
        'btnForm
        '
        Me.btnForm.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnForm.Font = New System.Drawing.Font("Segoe UI Emoji", 8.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnForm.Location = New System.Drawing.Point(517, 0)
        Me.btnForm.Name = "btnForm"
        Me.btnForm.Size = New System.Drawing.Size(62, 55)
        Me.btnForm.TabIndex = 2
        Me.btnForm.Text = "X"
        Me.btnForm.UseVisualStyleBackColor = True
        '
        'Titulo
        '
        Me.Titulo.AutoSize = True
        Me.Titulo.Cursor = System.Windows.Forms.Cursors.Default
        Me.Titulo.Font = New System.Drawing.Font("Cambria", 24.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Titulo.Location = New System.Drawing.Point(12, 18)
        Me.Titulo.Name = "Titulo"
        Me.Titulo.Size = New System.Drawing.Size(144, 37)
        Me.Titulo.TabIndex = 1
        Me.Titulo.Text = "Lectores"
        '
        'PanelBusqueda
        '
        Me.PanelBusqueda.BackColor = System.Drawing.Color.White
        Me.PanelBusqueda.Controls.Add(Me.busqueda)
        Me.PanelBusqueda.Controls.Add(Me.PictureBox1)
        Me.PanelBusqueda.Dock = System.Windows.Forms.DockStyle.Top
        Me.PanelBusqueda.Location = New System.Drawing.Point(0, 52)
        Me.PanelBusqueda.Name = "PanelBusqueda"
        Me.PanelBusqueda.Size = New System.Drawing.Size(579, 35)
        Me.PanelBusqueda.TabIndex = 1
        '
        'busqueda
        '
        Me.busqueda.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.busqueda.Location = New System.Drawing.Point(62, 6)
        Me.busqueda.Name = "busqueda"
        Me.busqueda.Size = New System.Drawing.Size(481, 26)
        Me.busqueda.TabIndex = 2
        '
        'PanelContenido
        '
        Me.PanelContenido.BackColor = System.Drawing.Color.White
        Me.PanelContenido.Controls.Add(Me.PanelDatos)
        Me.PanelContenido.Controls.Add(Me.DataLectores)
        Me.PanelContenido.Controls.Add(Me.PanelLateral)
        Me.PanelContenido.Dock = System.Windows.Forms.DockStyle.Fill
        Me.PanelContenido.Location = New System.Drawing.Point(0, 87)
        Me.PanelContenido.Name = "PanelContenido"
        Me.PanelContenido.Size = New System.Drawing.Size(579, 381)
        Me.PanelContenido.TabIndex = 2
        '
        'PanelDatos
        '
        Me.PanelDatos.Controls.Add(Me.btnCancel)
        Me.PanelDatos.Controls.Add(Me.btnModify)
        Me.PanelDatos.Controls.Add(Me.btnSave)
        Me.PanelDatos.Controls.Add(Me.inputObservasiones)
        Me.PanelDatos.Controls.Add(Me.lblObservasiones)
        Me.PanelDatos.Controls.Add(Me.inputDireccion)
        Me.PanelDatos.Controls.Add(Me.lblDireccion)
        Me.PanelDatos.Controls.Add(Me.inputTelefono)
        Me.PanelDatos.Controls.Add(Me.lblTelefono)
        Me.PanelDatos.Controls.Add(Me.inputName)
        Me.PanelDatos.Controls.Add(Me.lblId)
        Me.PanelDatos.Controls.Add(Me.inputID)
        Me.PanelDatos.Controls.Add(Me.lblName)
        Me.PanelDatos.Location = New System.Drawing.Point(0, 0)
        Me.PanelDatos.Name = "PanelDatos"
        Me.PanelDatos.Size = New System.Drawing.Size(579, 381)
        Me.PanelDatos.TabIndex = 3
        Me.PanelDatos.Visible = False
        '
        'btnCancel
        '
        Me.btnCancel.BackColor = System.Drawing.Color.LightCoral
        Me.btnCancel.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCancel.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCancel.FlatAppearance.BorderSize = 0
        Me.btnCancel.Font = New System.Drawing.Font("Cambria", 8.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCancel.Location = New System.Drawing.Point(437, 332)
        Me.btnCancel.Name = "btnCancel"
        Me.btnCancel.Size = New System.Drawing.Size(99, 37)
        Me.btnCancel.TabIndex = 15
        Me.btnCancel.Text = "Cancelar"
        Me.btnCancel.UseVisualStyleBackColor = False
        '
        'btnModify
        '
        Me.btnModify.BackColor = System.Drawing.Color.LightCoral
        Me.btnModify.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnModify.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnModify.FlatAppearance.BorderSize = 0
        Me.btnModify.Font = New System.Drawing.Font("Cambria", 8.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnModify.Location = New System.Drawing.Point(216, 332)
        Me.btnModify.Name = "btnModify"
        Me.btnModify.Size = New System.Drawing.Size(99, 37)
        Me.btnModify.TabIndex = 14
        Me.btnModify.Text = "Modificar"
        Me.btnModify.UseVisualStyleBackColor = False
        '
        'btnSave
        '
        Me.btnSave.BackColor = System.Drawing.Color.DeepSkyBlue
        Me.btnSave.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnSave.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnSave.FlatAppearance.BorderSize = 0
        Me.btnSave.Font = New System.Drawing.Font("Cambria", 8.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnSave.Location = New System.Drawing.Point(12, 332)
        Me.btnSave.Name = "btnSave"
        Me.btnSave.Size = New System.Drawing.Size(99, 37)
        Me.btnSave.TabIndex = 13
        Me.btnSave.Text = "Guardar"
        Me.btnSave.UseVisualStyleBackColor = False
        '
        'inputObservasiones
        '
        Me.inputObservasiones.Location = New System.Drawing.Point(137, 217)
        Me.inputObservasiones.Multiline = True
        Me.inputObservasiones.Name = "inputObservasiones"
        Me.inputObservasiones.Size = New System.Drawing.Size(406, 47)
        Me.inputObservasiones.TabIndex = 12
        '
        'lblObservasiones
        '
        Me.lblObservasiones.AutoSize = True
        Me.lblObservasiones.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblObservasiones.Location = New System.Drawing.Point(17, 215)
        Me.lblObservasiones.Name = "lblObservasiones"
        Me.lblObservasiones.Size = New System.Drawing.Size(114, 20)
        Me.lblObservasiones.TabIndex = 11
        Me.lblObservasiones.Text = "Observasiones"
        '
        'inputDireccion
        '
        Me.inputDireccion.Location = New System.Drawing.Point(137, 152)
        Me.inputDireccion.Multiline = True
        Me.inputDireccion.Name = "inputDireccion"
        Me.inputDireccion.Size = New System.Drawing.Size(406, 45)
        Me.inputDireccion.TabIndex = 10
        '
        'lblDireccion
        '
        Me.lblDireccion.AutoSize = True
        Me.lblDireccion.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblDireccion.Location = New System.Drawing.Point(17, 152)
        Me.lblDireccion.Name = "lblDireccion"
        Me.lblDireccion.Size = New System.Drawing.Size(75, 20)
        Me.lblDireccion.TabIndex = 9
        Me.lblDireccion.Text = "Direccion"
        '
        'inputTelefono
        '
        Me.inputTelefono.Location = New System.Drawing.Point(137, 114)
        Me.inputTelefono.Name = "inputTelefono"
        Me.inputTelefono.Size = New System.Drawing.Size(406, 20)
        Me.inputTelefono.TabIndex = 8
        '
        'lblTelefono
        '
        Me.lblTelefono.AutoSize = True
        Me.lblTelefono.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblTelefono.Location = New System.Drawing.Point(17, 112)
        Me.lblTelefono.Name = "lblTelefono"
        Me.lblTelefono.Size = New System.Drawing.Size(71, 20)
        Me.lblTelefono.TabIndex = 7
        Me.lblTelefono.Text = "Telefono"
        '
        'inputName
        '
        Me.inputName.Location = New System.Drawing.Point(137, 79)
        Me.inputName.Name = "inputName"
        Me.inputName.Size = New System.Drawing.Size(406, 20)
        Me.inputName.TabIndex = 6
        '
        'lblId
        '
        Me.lblId.AutoSize = True
        Me.lblId.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblId.Location = New System.Drawing.Point(17, 41)
        Me.lblId.Name = "lblId"
        Me.lblId.Size = New System.Drawing.Size(26, 20)
        Me.lblId.TabIndex = 5
        Me.lblId.Text = "ID"
        '
        'inputID
        '
        Me.inputID.Location = New System.Drawing.Point(137, 41)
        Me.inputID.Name = "inputID"
        Me.inputID.Size = New System.Drawing.Size(406, 20)
        Me.inputID.TabIndex = 4
        '
        'lblName
        '
        Me.lblName.AutoSize = True
        Me.lblName.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblName.Location = New System.Drawing.Point(17, 79)
        Me.lblName.Name = "lblName"
        Me.lblName.Size = New System.Drawing.Size(65, 20)
        Me.lblName.TabIndex = 0
        Me.lblName.Text = "Nombre"
        '
        'DataLectores
        '
        Me.DataLectores.AllowUserToAddRows = False
        Me.DataLectores.AllowUserToDeleteRows = False
        Me.DataLectores.AllowUserToResizeColumns = False
        Me.DataLectores.BackgroundColor = System.Drawing.Color.White
        Me.DataLectores.BorderStyle = System.Windows.Forms.BorderStyle.None
        Me.DataLectores.CellBorderStyle = System.Windows.Forms.DataGridViewCellBorderStyle.None
        Me.DataLectores.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.DataLectores.Columns.AddRange(New System.Windows.Forms.DataGridViewColumn() {Me.Delete})
        Me.DataLectores.Dock = System.Windows.Forms.DockStyle.Fill
        Me.DataLectores.GridColor = System.Drawing.SystemColors.MenuHighlight
        Me.DataLectores.Location = New System.Drawing.Point(0, 0)
        Me.DataLectores.Name = "DataLectores"
        Me.DataLectores.RowHeadersVisible = False
        Me.DataLectores.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect
        Me.DataLectores.Size = New System.Drawing.Size(469, 381)
        Me.DataLectores.TabIndex = 1
        '
        'PanelLateral
        '
        Me.PanelLateral.Controls.Add(Me.Añadir)
        Me.PanelLateral.Dock = System.Windows.Forms.DockStyle.Right
        Me.PanelLateral.Location = New System.Drawing.Point(469, 0)
        Me.PanelLateral.Name = "PanelLateral"
        Me.PanelLateral.Size = New System.Drawing.Size(110, 381)
        Me.PanelLateral.TabIndex = 0
        '
        'DataGridViewImageColumn1
        '
        Me.DataGridViewImageColumn1.HeaderText = ""
        Me.DataGridViewImageColumn1.Image = Global.CRUD.My.Resources.Resources.delete
        Me.DataGridViewImageColumn1.ImageLayout = System.Windows.Forms.DataGridViewImageCellLayout.Zoom
        Me.DataGridViewImageColumn1.Name = "DataGridViewImageColumn1"
        '
        'Delete
        '
        Me.Delete.HeaderText = ""
        Me.Delete.Image = Global.CRUD.My.Resources.Resources.delete
        Me.Delete.ImageLayout = System.Windows.Forms.DataGridViewImageCellLayout.Zoom
        Me.Delete.Name = "Delete"
        '
        'Añadir
        '
        Me.Añadir.Cursor = System.Windows.Forms.Cursors.Hand
        Me.Añadir.Image = CType(resources.GetObject("Añadir.Image"), System.Drawing.Image)
        Me.Añadir.Location = New System.Drawing.Point(3, 258)
        Me.Añadir.Name = "Añadir"
        Me.Añadir.Size = New System.Drawing.Size(105, 73)
        Me.Añadir.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom
        Me.Añadir.TabIndex = 0
        Me.Añadir.TabStop = False
        '
        'PictureBox1
        '
        Me.PictureBox1.Image = CType(resources.GetObject("PictureBox1.Image"), System.Drawing.Image)
        Me.PictureBox1.Location = New System.Drawing.Point(19, 3)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(37, 33)
        Me.PictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom
        Me.PictureBox1.TabIndex = 0
        Me.PictureBox1.TabStop = False
        '
        'Formulario_CRUD
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.SystemColors.ControlText
        Me.ClientSize = New System.Drawing.Size(579, 468)
        Me.Controls.Add(Me.PanelContenido)
        Me.Controls.Add(Me.PanelBusqueda)
        Me.Controls.Add(Me.TituloBG)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "Formulario_CRUD"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "Form1"
        Me.TituloBG.ResumeLayout(False)
        Me.TituloBG.PerformLayout()
        Me.PanelBusqueda.ResumeLayout(False)
        Me.PanelBusqueda.PerformLayout()
        Me.PanelContenido.ResumeLayout(False)
        Me.PanelDatos.ResumeLayout(False)
        Me.PanelDatos.PerformLayout()
        CType(Me.DataLectores, System.ComponentModel.ISupportInitialize).EndInit()
        Me.PanelLateral.ResumeLayout(False)
        CType(Me.Añadir, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents TituloBG As Panel
    Friend WithEvents Titulo As Label
    Friend WithEvents btnForm As Button
    Friend WithEvents PanelBusqueda As Panel
    Friend WithEvents busqueda As TextBox
    Friend WithEvents PictureBox1 As PictureBox
    Friend WithEvents PanelContenido As Panel
    Friend WithEvents PanelLateral As Panel
    Friend WithEvents Añadir As PictureBox
    Friend WithEvents DataLectores As DataGridView
    Friend WithEvents PanelDatos As Panel
    Friend WithEvents inputObservasiones As TextBox
    Friend WithEvents lblObservasiones As Label
    Friend WithEvents inputDireccion As TextBox
    Friend WithEvents lblDireccion As Label
    Friend WithEvents inputTelefono As TextBox
    Friend WithEvents lblTelefono As Label
    Friend WithEvents inputName As TextBox
    Friend WithEvents lblId As Label
    Friend WithEvents inputID As TextBox
    Friend WithEvents lblName As Label
    Friend WithEvents btnSave As Button
    Friend WithEvents btnCancel As Button
    Friend WithEvents btnModify As Button
    Friend WithEvents Delete As DataGridViewImageColumn
    Friend WithEvents DataGridViewImageColumn1 As DataGridViewImageColumn
End Class
