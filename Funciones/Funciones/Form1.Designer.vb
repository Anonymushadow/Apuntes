<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
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
        Me.funcion = New System.Windows.Forms.Button()
        Me.procedimiento = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'funcion
        '
        Me.funcion.Location = New System.Drawing.Point(13, 194)
        Me.funcion.Name = "funcion"
        Me.funcion.Size = New System.Drawing.Size(75, 23)
        Me.funcion.TabIndex = 0
        Me.funcion.Text = "Funcion"
        Me.funcion.UseVisualStyleBackColor = True
        '
        'procedimiento
        '
        Me.procedimiento.Location = New System.Drawing.Point(190, 194)
        Me.procedimiento.Name = "procedimiento"
        Me.procedimiento.Size = New System.Drawing.Size(82, 23)
        Me.procedimiento.TabIndex = 1
        Me.procedimiento.Text = "Procedimiento"
        Me.procedimiento.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(284, 261)
        Me.Controls.Add(Me.procedimiento)
        Me.Controls.Add(Me.funcion)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents funcion As System.Windows.Forms.Button
    Friend WithEvents procedimiento As System.Windows.Forms.Button

End Class
