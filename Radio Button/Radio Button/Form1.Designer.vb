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
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.Suma = New System.Windows.Forms.RadioButton()
        Me.Multiplicacion = New System.Windows.Forms.RadioButton()
        Me.Resta = New System.Windows.Forms.RadioButton()
        Me.divicion = New System.Windows.Forms.RadioButton()
        Me.op = New System.Windows.Forms.Button()
        Me.x = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.num1 = New System.Windows.Forms.TextBox()
        Me.num2 = New System.Windows.Forms.TextBox()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.divicion)
        Me.GroupBox1.Controls.Add(Me.Resta)
        Me.GroupBox1.Controls.Add(Me.Multiplicacion)
        Me.GroupBox1.Controls.Add(Me.Suma)
        Me.GroupBox1.Location = New System.Drawing.Point(29, 12)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(230, 79)
        Me.GroupBox1.TabIndex = 0
        Me.GroupBox1.TabStop = False
        '
        'Suma
        '
        Me.Suma.AutoSize = True
        Me.Suma.Location = New System.Drawing.Point(7, 20)
        Me.Suma.Name = "Suma"
        Me.Suma.Size = New System.Drawing.Size(52, 17)
        Me.Suma.TabIndex = 0
        Me.Suma.TabStop = True
        Me.Suma.Text = "Suma"
        Me.Suma.UseVisualStyleBackColor = True
        '
        'Multiplicacion
        '
        Me.Multiplicacion.AutoSize = True
        Me.Multiplicacion.Location = New System.Drawing.Point(7, 44)
        Me.Multiplicacion.Name = "Multiplicacion"
        Me.Multiplicacion.Size = New System.Drawing.Size(89, 17)
        Me.Multiplicacion.TabIndex = 1
        Me.Multiplicacion.TabStop = True
        Me.Multiplicacion.Text = "Multiplicacion"
        Me.Multiplicacion.UseVisualStyleBackColor = True
        '
        'Resta
        '
        Me.Resta.AutoSize = True
        Me.Resta.Location = New System.Drawing.Point(131, 20)
        Me.Resta.Name = "Resta"
        Me.Resta.Size = New System.Drawing.Size(53, 17)
        Me.Resta.TabIndex = 2
        Me.Resta.TabStop = True
        Me.Resta.Text = "Resta"
        Me.Resta.UseVisualStyleBackColor = True
        '
        'divicion
        '
        Me.divicion.AutoSize = True
        Me.divicion.Location = New System.Drawing.Point(131, 44)
        Me.divicion.Name = "divicion"
        Me.divicion.Size = New System.Drawing.Size(63, 17)
        Me.divicion.TabIndex = 3
        Me.divicion.TabStop = True
        Me.divicion.Text = "Divicion"
        Me.divicion.UseVisualStyleBackColor = True
        '
        'op
        '
        Me.op.Location = New System.Drawing.Point(107, 215)
        Me.op.Name = "op"
        Me.op.Size = New System.Drawing.Size(75, 23)
        Me.op.TabIndex = 1
        Me.op.Text = "Operacion"
        Me.op.UseVisualStyleBackColor = True
        '
        'x
        '
        Me.x.AutoSize = True
        Me.x.Location = New System.Drawing.Point(33, 112)
        Me.x.Name = "x"
        Me.x.Size = New System.Drawing.Size(53, 13)
        Me.x.TabIndex = 2
        Me.x.Text = "Numero 1"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(194, 112)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(53, 13)
        Me.Label2.TabIndex = 3
        Me.Label2.Text = "Numero 2"
        '
        'num1
        '
        Me.num1.Location = New System.Drawing.Point(12, 128)
        Me.num1.Name = "num1"
        Me.num1.Size = New System.Drawing.Size(100, 20)
        Me.num1.TabIndex = 4
        '
        'num2
        '
        Me.num2.Location = New System.Drawing.Point(172, 128)
        Me.num2.Name = "num2"
        Me.num2.Size = New System.Drawing.Size(100, 20)
        Me.num2.TabIndex = 5
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(284, 261)
        Me.Controls.Add(Me.num2)
        Me.Controls.Add(Me.num1)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.x)
        Me.Controls.Add(Me.op)
        Me.Controls.Add(Me.GroupBox1)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents divicion As System.Windows.Forms.RadioButton
    Friend WithEvents Resta As System.Windows.Forms.RadioButton
    Friend WithEvents Multiplicacion As System.Windows.Forms.RadioButton
    Friend WithEvents Suma As System.Windows.Forms.RadioButton
    Friend WithEvents op As System.Windows.Forms.Button
    Friend WithEvents x As System.Windows.Forms.Label
    Friend WithEvents Label2 As System.Windows.Forms.Label
    Friend WithEvents num1 As System.Windows.Forms.TextBox
    Friend WithEvents num2 As System.Windows.Forms.TextBox

End Class
