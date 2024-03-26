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
        Me.titulo = New System.Windows.Forms.Label()
        Me.subtitulo = New System.Windows.Forms.Label()
        Me.indicador1 = New System.Windows.Forms.Label()
        Me.indicador2 = New System.Windows.Forms.Label()
        Me.n1 = New System.Windows.Forms.TextBox()
        Me.n2 = New System.Windows.Forms.TextBox()
        Me.sumar = New System.Windows.Forms.Button()
        Me.cerrar = New System.Windows.Forms.Button()
        Me.resultado = New System.Windows.Forms.TextBox()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.SuspendLayout()
        '
        'titulo
        '
        Me.titulo.AutoSize = True
        Me.titulo.Location = New System.Drawing.Point(28, 9)
        Me.titulo.Name = "titulo"
        Me.titulo.Size = New System.Drawing.Size(248, 13)
        Me.titulo.TabIndex = 0
        Me.titulo.Text = "este programa esta hecho para sumar dos numeros"
        '
        'subtitulo
        '
        Me.subtitulo.AutoSize = True
        Me.subtitulo.Location = New System.Drawing.Point(-1, 40)
        Me.subtitulo.Name = "subtitulo"
        Me.subtitulo.Size = New System.Drawing.Size(297, 13)
        Me.subtitulo.TabIndex = 1
        Me.subtitulo.Text = "por favor a continuacion escriba los numero que desea sumar"
        '
        'indicador1
        '
        Me.indicador1.AutoSize = True
        Me.indicador1.Location = New System.Drawing.Point(41, 102)
        Me.indicador1.Name = "indicador1"
        Me.indicador1.Size = New System.Drawing.Size(53, 13)
        Me.indicador1.TabIndex = 2
        Me.indicador1.Text = "Numero 1"
        '
        'indicador2
        '
        Me.indicador2.AutoSize = True
        Me.indicador2.Location = New System.Drawing.Point(223, 102)
        Me.indicador2.Name = "indicador2"
        Me.indicador2.Size = New System.Drawing.Size(53, 13)
        Me.indicador2.TabIndex = 3
        Me.indicador2.Text = "Numero 2"
        '
        'n1
        '
        Me.n1.Location = New System.Drawing.Point(12, 118)
        Me.n1.Name = "n1"
        Me.n1.Size = New System.Drawing.Size(100, 20)
        Me.n1.TabIndex = 4
        '
        'n2
        '
        Me.n2.Location = New System.Drawing.Point(196, 118)
        Me.n2.Name = "n2"
        Me.n2.Size = New System.Drawing.Size(100, 20)
        Me.n2.TabIndex = 5
        '
        'sumar
        '
        Me.sumar.Location = New System.Drawing.Point(119, 209)
        Me.sumar.Name = "sumar"
        Me.sumar.Size = New System.Drawing.Size(75, 23)
        Me.sumar.TabIndex = 6
        Me.sumar.Text = "Sumar"
        Me.sumar.UseVisualStyleBackColor = True
        '
        'cerrar
        '
        Me.cerrar.Location = New System.Drawing.Point(88, 238)
        Me.cerrar.Name = "cerrar"
        Me.cerrar.Size = New System.Drawing.Size(136, 23)
        Me.cerrar.TabIndex = 7
        Me.cerrar.Text = "Cerrar Programa"
        Me.cerrar.UseVisualStyleBackColor = True
        '
        'resultado
        '
        Me.resultado.Location = New System.Drawing.Point(109, 173)
        Me.resultado.Name = "resultado"
        Me.resultado.Size = New System.Drawing.Size(100, 20)
        Me.resultado.TabIndex = 8
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(130, 157)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(55, 13)
        Me.Label1.TabIndex = 9
        Me.Label1.Text = "Resultado"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(308, 273)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.resultado)
        Me.Controls.Add(Me.cerrar)
        Me.Controls.Add(Me.sumar)
        Me.Controls.Add(Me.n2)
        Me.Controls.Add(Me.n1)
        Me.Controls.Add(Me.indicador2)
        Me.Controls.Add(Me.indicador1)
        Me.Controls.Add(Me.subtitulo)
        Me.Controls.Add(Me.titulo)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents titulo As System.Windows.Forms.Label
    Friend WithEvents subtitulo As System.Windows.Forms.Label
    Friend WithEvents indicador1 As System.Windows.Forms.Label
    Friend WithEvents indicador2 As System.Windows.Forms.Label
    Friend WithEvents n1 As System.Windows.Forms.TextBox
    Friend WithEvents n2 As System.Windows.Forms.TextBox
    Friend WithEvents sumar As System.Windows.Forms.Button
    Friend WithEvents cerrar As System.Windows.Forms.Button

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    End Sub

    Private Sub cerrar_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles cerrar.Click
        Me.Close()
    End Sub

    Private Sub sumar_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles sumar.Click
        Dim num1, num2, res As Integer
        num1 = n1.Text
        num2 = Convert.ToInt32(n2.text)

        res = num1 + num2

        resultado.Text = res
    End Sub
    Friend WithEvents resultado As System.Windows.Forms.TextBox

    Private Sub n1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles n1.TextChanged
        n1.TextAlign = HorizontalAlignment.Center
    End Sub
    Friend WithEvents Label1 As System.Windows.Forms.Label

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label1.Click

    End Sub

    Private Sub resultado_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles resultado.TextChanged
        resultado.TextAlign = HorizontalAlignment.Center
    End Sub

    Private Sub n2_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles n2.TextChanged
        n2.TextAlign = HorizontalAlignment.Center
    End Sub
End Class
