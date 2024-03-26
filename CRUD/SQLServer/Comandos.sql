CREATE PROCEDURE Insertar_Lector
@idLector varchar(13),
@Nombre varchar(50),
@Telefono int,
@Direccion varchar(100),
@Observaciones varchar (100)
AS
IF EXISTS (SELECT id FROM Lectores WHERE id = @idLector)
	RAISERROR('Este Numero de identidad esta repetido', 16,1)
ELSE
	INSERT INTO Lectores 
	VALUES (@idLector, @Nombre, @Telefono, @Direccion, @Observaciones)
