Imports System.Data
Imports System.Data.SqlClient
Imports System.Configuration

Module ConexionMaestra
    'creamos una conexion sql
    'nombre del servidor, nombre de la base de datos, nombre del id y contraseña
    Public conexion As New SqlConnection("Server=DESKTOP-HJ99NB1;Database=BD_CRUD;User Id=Anonymushadow;Password=123456789")

    'creamos la funcion que nos ayuda a iniciar la conexion
    Sub Abrir_conexion()
        If conexion.State = 0 Then
            conexion.Open()
        End If
    End Sub

    Sub Cerrar_conexion()
        If conexion.State = 1 Then
            conexion.Close()
        End If
    End Sub
End Module
