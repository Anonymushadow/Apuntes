----------------------------------------------------------------------------------
0_COMENTARIOS
----------------------------------------------------------------------------------
--Comentario de una linea

/*
    Comentario de varias lineas
*/


----------------------------------------------------------------------------------
1_CREAR BASE DE DATOS
----------------------------------------------------------------------------------
--CREATE DATABASE 'nombre_de_la_base_de_datos';
CREATE DATABASE 'usuarios';

----------------------------------------------------------------------------------
2_CREAR TABLAS
----------------------------------------------------------------------------------
/*
CREATE TABLE 'nombre_de_la_tabla'(
    'nombre_de_a_columna' tipo_de_dato otros_atributos_opcionales
);
*/
CREATE TABLE 'usuarios'(
    'id_usuario' INTEGER,
    'nombre' TEXT DEFAULT 'Sin nombre',
    'apellido' TEXT DEFAULT 'Sin apellido',
    'edad' INTEGER ,
    PRIMARY KEY('id_usuario' AUTOINCREMENT)
);


----------------------------------------------------------------------------------
3_INSERTAR DATOS EN UNA TABLA
----------------------------------------------------------------------------------
/*
INSERT INTO nombre_de_tabla(nombre_de_columnas)
VALUES (datos_a_insertar)
*/
INSERT INTO usuarios(nombre, apellido, edad)
VALUES ('Nahuel', 'Claudel', 20),
        ('Tomas', 'Anderson', 40),
        ('Manuel', 'Perez', 45)


----------------------------------------------------------------------------------
4_ELIMINAR TODOS LOS DATOS
----------------------------------------------------------------------------------
--DELETE FROM nombre_de_tabla;
DELETE FROM usuarios;


----------------------------------------------------------------------------------
5_SELECCIONAR TODOS LOS DATOS
----------------------------------------------------------------------------------
--SELECT * FROM nombre_de_tabla;
SELECT * FROM usuarios;


----------------------------------------------------------------------------------
6_SELECCIONAR COLUMNA NOMBRE Y COLUMNA EDAD
----------------------------------------------------------------------------------
--SELECT nombre_de_columnas FROM nombre_de_tabla
SELECT nombre, edad FROM usuarios;


----------------------------------------------------------------------------------
7_CAMBIAR EL NOMBRE DE LA COLUMNA TEMPORALMENTE
----------------------------------------------------------------------------------
--SELECT nombre_de_columna AS nombre_temporal FROM nombre_de_tabla;
SELECT LastName AS apellido FROM Employers;
SELECT LastName AS apellido, FirstName AS nombre FROM Employers;


----------------------------------------------------------------------------------
8_ORDENAR POR PRECIO DE FORMA DESCENDENTE
----------------------------------------------------------------------------------
--ORDER BY nombre_columna DESC
SELECT * FROM Products
ORDER BY price DESC


----------------------------------------------------------------------------------
9_ORDENAR POR PRECIO DE FORMA ASCENDENTE
----------------------------------------------------------------------------------
--ORDER BY nombre_columna ASC
SELECT * FROM Products 
ORDER BY price ASC


----------------------------------------------------------------------------------
10_ORDENAR POR PRECIO DE FORMA ASCENDENTE PERO CON LOS NULOS AL FINAL
----------------------------------------------------------------------------------
--ORDER BY nombre_columna ASC
SELECT * FROM Products 
ORDER BY price ASC NULLS LAST


----------------------------------------------------------------------------------
11_ORDENAR POR PRECIO DE FORMA ASCENDENTE PERO CON LOS NULOS AL PRINCIPIOS
----------------------------------------------------------------------------------
--ORDER BY nombre_columna DESC
SELECT * FROM Products 
ORDER BY price DESC NULLS FIRST

----------------------------------------------------------------------------------
12_ORDENAR DE FORMA ALEATORIA
----------------------------------------------------------------------------------
--ORDER BY RANDOM()
SELECT * FROM Products 
ORDER BY RANDOM() 


----------------------------------------------------------------------------------
13_ORDENAR POR DON COLUMNAS A LA VEZ 
----------------------------------------------------------------------------------
--ORDER BY nombre_de_columna, nombre_de_otra_columna
SELECT * FROM Products 
ORDER BY ProductName, Supplier_id 


----------------------------------------------------------------------------------
14_SELECCIONAR LOS NOMBRES DE PRODUCTO SIN REPETIDOS 
----------------------------------------------------------------------------------
--SELECT DISTINCT nombre_columna FROM nombre_tabla 
SELECT DISTINCT ProductName FROM Products 


----------------------------------------------------------------------------------
15_SELECCIONAR EL NOMBRE DEL USUARIO CON EL ID 7
----------------------------------------------------------------------------------
--SELECT nombre_de_columna FROM nombre_de_tabla WHERE nombre_de_columa operador condicion
SELECT ProductName FROM Products WHERE ProductID = 7;


----------------------------------------------------------------------------------
16_BUSCAR EL PRODUCTO CON EL NOMBRE TOFU
----------------------------------------------------------------------------------
--SELECT nombre_de_columna FROM nombre_de_tabla WHERE nombre_de_columa operador condicion
SELECT * FROM Products WHERE ProductName = 'Tofu';


----------------------------------------------------------------------------------
17_BUSCAR LOS PRODUCTOS CUYO PRECIO ES MENOR A 30
----------------------------------------------------------------------------------
--SELECT nombre_de_columna FROM nombre_de_tabla WHERE nombre_de_columa operador condicion
SELECT * FROM Products WHERE Price < 30;


----------------------------------------------------------------------------------
18_ELIMINAR EL REGISTRIO CON EL ID 5
----------------------------------------------------------------------------------
--DELETE FROM nombre_de_tabla WHERE nombre_de_columa operador condicion
DELETE FROM turnos_medicos WHERE id_turno = 5;


----------------------------------------------------------------------------------
19_ACTUALIZAR DATOS
----------------------------------------------------------------------------------
--UPDATE nombre_tabla SET nombre_columna = nuevo_dato WHERE nombre_de_columa operador condicion
UPDATE Products SET Price = 5000 WHERE ProductID = 2;
SELECT * FROM Products;


----------------------------------------------------------------------------------
20_ACTUALIZAR VARIOS DATOS
----------------------------------------------------------------------------------
--UPDATE nombre_tabla SET nombre_columna = nuevo_dato WHERE nombre_de_columa operador condicion
UPDATE Products SET Price = 5000, ProductName = 'book' WHERE ProductID = 2;
SELECT * FROM Products;


----------------------------------------------------------------------------------
21_SELECCIONAR LOS REGISTROS DONDE CUESTAN MAS DE $18 Y MENOS DE $30
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE condicion AND condicion;
SELECT * FROM Products WHERE Price > 20 AND Price < 30;


----------------------------------------------------------------------------------
22_SELECCIONAR LOS REGISTROS DONDE EL ID SEA MAYOR A 20 O MENOR A 5
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE condicion OR condicion;
SELECT * FROM Products WHERE ProductID > 20 OR ProductID < 5;


----------------------------------------------------------------------------------
23_SELECCIONAR LOS REGISTROS DONDE EL PRECIO ES MENOR A 20 O LA CATEGORIA ES 6 
PERO SI O SI DEBE SER EL PROVEEDOR 7
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE (condicion OR condicion) AND condicion;
SELECT * FROM Products WHERE (Price < 20 OR CategoryID = 6) AND SupplierID = 7;


----------------------------------------------------------------------------------
24_SELECCIONAR LOS REGISTROS DONDE EL PAIS ES CUALQUIERA MENOS USA
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE NOT condicion OR condicion;
SELECT * FROM Customers WHERE NOT Country = 'USA';

----------------------------------------------------------------------------------
25_SELECCIONAR LOS 5 REGISTROS DONDE EL ID ES MAYOR A 50 PERO NO PUEDEN SER
DE ALEMANIA, SIEMPRE DEBEN HABER 5 SIN IMPORTAR 
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE condicion AND NOT condicion LIMIT cantidad;
SELECT * FROM Customers WHERE CustomerID > 50 AND NOT Country = "Germany" LIMIT 5;


----------------------------------------------------------------------------------
26_SELECCIONAR 3 REGISTROS ALESTORIOS DONDE LA CATEGORIA NO SEA LA 6 NI 
EL PROVEEDOR SEA EL NUMERO 1, ADEMAS DEBE VALER $30 O MENOS Y CADA VEZ 
QUE RECARGUE DEBE TENER DISTINAS OPCIONES
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla 
--WHERE NOT condicion 
--AND NOT condicion 
--AND condicion 
--ORDER BY RANDOM() 
--LIMIT cantidad;
SELECT * FROM Products 
WHERE NOT CategoryID = 6 
AND NOT SupplierID = 1 
AND Price <= 30 
ORDER BY RANDOM() 
LIMIT 3;


----------------------------------------------------------------------------------
27_SELECCIONAR LOS REGISTROS DONDE EL PRECIO ESTA ENTRE $20 Y $40
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna BETWEEN condicion AND condicion;
SELECT * FROM Products WHERE Price BETWEEN 20 AND 40;


----------------------------------------------------------------------------------
28_SELECCIONAR LOS REGISTROS DONDE EL PRECIO NO ESTA ENTRE $20 Y $40
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna NOT BETWEEN condicion AND condicion;
SELECT * FROM Products WHERE Price NOT BETWEEN 20 AND 40;


----------------------------------------------------------------------------------
29_SELECCIONAR LOS REGISTROS DONDE EL NACIMINETO HAYA SIDO ENTRE 1960 Y 1970
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna BETWEEN condicion AND condicion;
SELECT * FROM Employers WHERE BirthDate BETWEEN "1960-0-1" AND "1970-0-1";


----------------------------------------------------------------------------------
30_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO COMIENCE CON "TO"
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna LIKE "letras%";
SELECT * FROM Products WHERE ProductName LIKE "To%";


----------------------------------------------------------------------------------
31_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO ACABE CON "fu"
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna LIKE "letras%";
SELECT * FROM Products WHERE ProductName LIKE "%fu";


----------------------------------------------------------------------------------
32_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO CONTENGA LA LETRA A 
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna LIKE "%letras%";
SELECT * FROM Products WHERE ProductName LIKE "%a%";


----------------------------------------------------------------------------------
33_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO COMIENCE CON "TO" Y 
TENGA CUATRO LETRAS MAS DESPUES 
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna LIKE "letras__";
SELECT * FROM Products WHERE ProductName LIKE "To__";



----------------------------------------------------------------------------------
34_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO SEA NULO 
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna IS NULL;
SELECT * FROM Products WHERE ProductName IS NULL;



----------------------------------------------------------------------------------
35_SELECCIONAR LOS REGISTROS DONDE EL PRODUCTO NO SEA NULO 
----------------------------------------------------------------------------------
--SELECT * FROM nombre_tabla WHERE nombre_columna WHERE nombre_columna IS NOT NULL;
SELECT * FROM Products WHERE ProductName IS NOT NULL;


----------------------------------------------------------------------------------
36_SELECCIONAR LOS USUARIOS CON EL ID 7, 8, 1 Y 9
----------------------------------------------------------------------------------
--SELECT * FROM nombre_de_tabla WHERE nombre_de_columa IN (numeros)
SELECT * FROM Products WHERE ProductID IN (7, 8, 1, 9);


----------------------------------------------------------------------------------
37_SELECCIONAR TODOS LOS USUARIOS MENOS AQUELLOS CON EL ID 7, 8, 1 Y 9
----------------------------------------------------------------------------------
--SELECT * FROM nombre_de_tabla WHERE nombre_de_columa NOT IN (numeros)
SELECT * FROM Products WHERE ProductID NOT IN (7, 8, 1, 9);


----------------------------------------------------------------------------------
38_CONTAR CUANTOS EMPLEADOS HAY
----------------------------------------------------------------------------------
--SELECT COUNT(nombre_de_columna) FROM nombre_de_tabla
SELECT COUNT(FirstName) FROM Employees


----------------------------------------------------------------------------------
39_SUMAR TODOS LOS PRECIOS
----------------------------------------------------------------------------------
--SELECT SUM(nombre_de_columna) FROM nombre_de_tabla
SELECT SUM(Price) FROM Products


----------------------------------------------------------------------------------
40_PROMEDIAR TODOS LOS PRECIOS
----------------------------------------------------------------------------------
--SELECT SUM(nombre_de_columna) FROM nombre_de_tabla
SELECT AVG(Price) FROM Products


----------------------------------------------------------------------------------
41_PROMEDIAR TODOS LOS PRECIOS Y REDONDEAR CON 2 DECIMALES
----------------------------------------------------------------------------------
--SELECT ROUND(AVG(nombre_de_columna), decimales) FROM nombre_de_tabla
SELECT ROUND(AVG(Price), 2) FROM Products


----------------------------------------------------------------------------------
42_BUSCAR EL PRECIO MAS BAJO
----------------------------------------------------------------------------------
--SELECT MIN(nombre_de_columna) FROM nombre_de_tabla
SELECT MIN(Price) FROM Products


----------------------------------------------------------------------------------
43_BUSCAR EL PRECIO MAS ALTO
----------------------------------------------------------------------------------
--SELECT MIN(nombre_de_columna) FROM nombre_de_tabla
SELECT MAX(Price) FROM Products


----------------------------------------------------------------------------------
44_AGRUPAR LOS PRODUCTOS POR PROVEEDOR
----------------------------------------------------------------------------------
--SELECT nombre_de_columna FROM nombre_de_tabla GROUP BY nombre_columna
SELECT * FROM Products GROUP BY SupplierID


----------------------------------------------------------------------------------
45_AGRUPAR LOS PRODUCTOS POR PROVEEDOR, SACAR SU PROMEDIO DE PRECIO Y FILTRAR LOS
MAYORES A 40
----------------------------------------------------------------------------------
--SELECT ROUND(AVG(nombre_de_columna)) as nombre_temporal FROM nombre_de_tabla
--GROUP BY nombre_columna HAVING nombre_temporal operador numero
SELECT ROUND(AVG(price)) as promedio FROM Products 
WHERE ProductName IS NOT NULL
GROUP BY SupplierID
HAVING promedio > 40


----------------------------------------------------------------------------------
46_BUSCAR EL TOTAL DE PRODUCTOS VENDIDOS POR CATEGORIA Y DESCARTAR LOS DE MENOS DE 50
----------------------------------------------------------------------------------
--SELECT nombre_columna, SUM(nombre_columna) as nombre_temporal FROM nombre_tabla
--GROUP BY nombre_columna
--ORDER BY nombre_temporal
SELECT ProductID, SUM(Quantity) as Total FROM OrderDetails
GROUP BY ProductID
HAVING Total > 50
ORDER BY Total


----------------------------------------------------------------------------------
47_BUSCAR EL PRODUCTO MAS VENDIDO
----------------------------------------------------------------------------------
--SELECT nombre_columna, SUM(nombre_columna) as nombre_temporal FROM nombre_tabla
--GROUP BY nombre_columna
--ORDER BY nombre_temporal DESC
--LIMIT 1
SELECT ProductID, SUM(Quantity) as Total FROM OrderDetails
GROUP BY ProductID
HAVING Total > 50
ORDER BY Total DESC
LIMIT 1


----------------------------------------------------------------------------------
48_BUSCAR EL PRODUCTO MENOS VENDIDO
----------------------------------------------------------------------------------
--SELECT nombre_columna, SUM(nombre_columna) as nombre_temporal FROM nombre_tabla
--GROUP BY nombre_columna
--ORDER BY nombre_temporal ASC
--LIMIT 1
SELECT ProductID, SUM(Quantity) as Total FROM OrderDetails
GROUP BY ProductID
HAVING Total > 50
ORDER BY Total ASC
LIMIT 1


----------------------------------------------------------------------------------
49_DEVOLVERLSO DATOS DE UNA COLUMNA DENTRO DE OTRA TABLA
----------------------------------------------------------------------------------
--SELECT nombre_columna, 
--(SELECT nombre_columna FROM nombre_tabla WHERE 
--nombre_tabla_consulta.nombre_columna_consulta = nombre_columna_subconsulta) 
--as nombre_temporal FROM nombre_tabla
SELECT ProductID, 
(SELECT ProductName FROM Products WHERE OrderDetails.ProductID = ProductID) as producto
FROM OrderDetails

--selecciono el id de producto y selecciono de Products el nombre donde el id de orderdetails coinsida con el
--de Products


----------------------------------------------------------------------------------
50_OBTENER PRODUCTO, TOTAL VENDIDO, PRECIO Y TOTAL RECAUDADO
----------------------------------------------------------------------------------
SELECT ProductName AS Producto, 
        (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID) AS Cantidad, 
		Price AS Precio,
        (Price * (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID)) AS Total_Recaudado
FROM Products
GROUP BY Producto 
ORDER BY Total_Recaudado DESC

/*
seleccionamos el nombre del producto y lo almacenamos como Producto
de orderdetails seleccionamos Qantity y los sumamos donde si productid sea igual al de la tabla Products
seleccionamos el precio
multiplicamos el precio por la cantidad
agrupamos segun el producto
ordenamos de forma descendente segun el total recaudado
*/


----------------------------------------------------------------------------------
51_OBTENER PRODUCTO,  PRECIO Y TOTAL RECAUDADO DONDE LA CANTIDAD VENDIDA SEA MAYOR A 40
----------------------------------------------------------------------------------
SELECT ProductName AS Producto,  
		Price AS Precio,
        (Price * (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID)) AS Total_Recaudado
FROM Products
WHERE (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID) > 40
GROUP BY Producto 
ORDER BY Total_Recaudado DESC


----------------------------------------------------------------------------------
52_OBTENER DATOS DE UNA SUBCONSULTA COMO TABLA
----------------------------------------------------------------------------------
SELECT * FROM (SELECT ProductName AS Producto,  
		Price AS Precio,
        (Price * (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID)) AS Total_Recaudado
FROM Products
WHERE (SELECT SUM(Quantity) FROM OrderDetails WHERE Products.ProductID = ProductID) > 40
GROUP BY Producto 
ORDER BY Total_Recaudado DESC)


----------------------------------------------------------------------------------
53_VER TODAS LAS POSIBLES COMBINACIONES ENTRE DOS TABLAS
----------------------------------------------------------------------------------
--SELECT nombre_columna FROM nombre_tabla CROSS JOIN nombre_tabla
SELECT * FROM Employees CROSS JOIN Orders


----------------------------------------------------------------------------------
54_UNIR DOS TABLAS DONDE EL EL ID DEL EMPLEADO COINCIDAN Y ESCRIBIR POR CADA
ORDEN LOS DATOS DEL EMPLEADO
----------------------------------------------------------------------------------
--SELECT nombre_columna FROM nombre_tabla INNER JOIN nombre_tabla ON condicion 
SELECT * FROM Employees e INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID


----------------------------------------------------------------------------------
55_CREAR TABLAS NUEVAS
----------------------------------------------------------------------------------
CREATE TABLE "Rewards" (
"RewardID" INTEGER,
"EmployeeID" INTEGER,
"Reward" INTEGER,
"Month" TEXT,
PRIMARY KEY ('RewardID' AUTOINCREMENT)
);

INSERT INTO Rewards (EmployeeID,Reward,Month)
VALUES (3, 200, "January"),
        (2, 180, "February"),
        (5, 200, "March"),
        (1, 280, "April"),
        (8, 160, "May"),
        (null, null, "June")


----------------------------------------------------------------------------------
56_SELECCIONAR EL NOMBRE, RECOMPENSA Y MES DE LAS TABLAS Employees Y Rewards Y UNIR LOS
DATOS DONDE COINCIDAN EL EmployeeID 
----------------------------------------------------------------------------------
SELECT FirstName, Reward, Month FROM Employees AS E
INNER JOIN Rewards R ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
57_SELECCIONAR LA TABLA EMPLEADOS Y SI TIENEN RECOMPENSAS PONERLO
----------------------------------------------------------------------------------
SELECT FirstName, Reward, Month FROM Employees AS E
LEFT JOIN Rewards R ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
58_SELECCIONAR LA TABLA RECOMPENSAS Y SI ALGUN EMPLEADO LA RECIBIO PONERLO
----------------------------------------------------------------------------------
--En sqlite no hay right join pero se peude solucionar cambiando el orden de lamado de las tablas
SELECT FirstName, Reward, Month FROM Employees AS E
RIGHT JOIN Rewards R ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
59_SELECCIONAR LAS DOS TABLAS ENTERAS 
----------------------------------------------------------------------------------
SELECT FirstName, Reward, Month FROM Employees AS E
LEFT JOIN Rewards R ON E.EmployeeID = R.EmployeeID

UNION ALL

SELECT FirstName, Reward, Month FROM Rewards R
LEFT JOIN Employees AS E ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
60_SELECCIONAR LAS DOS TABLAS PERO SIN REPETIR DATOS
----------------------------------------------------------------------------------
SELECT FirstName, Reward, Month FROM Employees AS E
LEFT JOIN Rewards R ON E.EmployeeID = R.EmployeeID

UNION

SELECT FirstName, Reward, Month FROM Rewards R
LEFT JOIN Employees AS E ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
61_CREAR UN INDICE ORDONAL
----------------------------------------------------------------------------------
CREATE INDEX name ON Products (ProductName)


----------------------------------------------------------------------------------
62_CREAR UN INDICE UNICO
----------------------------------------------------------------------------------
CREATE UNIQUE INDEX name ON Employees (FirstName)
--crea un indice para cada nombre pero no se pueden repetir estos nombres, no s eregistra


----------------------------------------------------------------------------------
63_CREAR UN INDICE UNICO COMPUESTO
----------------------------------------------------------------------------------
CREATE UNIQUE INDEX name ON Employees (FirstName, LastName)
--pueden repetirse los nombres o los apellidos pero no los dos juntos


----------------------------------------------------------------------------------
64_ELIMINAR UN INDICE
----------------------------------------------------------------------------------
--DROP nombre_del_indice
DROP name


----------------------------------------------------------------------------------
65_CREAR UNA CLAVE FORANEA
----------------------------------------------------------------------------------
/*
CREATE TABLE "nombre_tabla" (
	"nombre_columna"	TIPO_DE_DATO,
	"nombre_columna"	TIPO_DE_DATO,
	"nombre_columna"	TIPO_DE_DATO,
	"nombre_columna"	TIPO_DE_DATO,
	FOREIGN KEY("nombre_columna") REFERENCES "nombre_tabla_referenciada"("nombre_columna"),
	FOREIGN KEY("nombre_columna") REFERENCES "nombre_tabla_referenciada"("nombre_columna"),
	PRIMARY KEY("nombre_columna" AUTOINCREMENT)
);
*/
CREATE TABLE "OrderDetails" (
	"OrderDetailID"	INTEGER,
	"OrderID"	INTEGER,
	"ProductID"	INTEGER,
	"Quantity"	INTEGER,
	FOREIGN KEY("OrderID") REFERENCES "Orders"("OrderID"),
	FOREIGN KEY("ProductID") REFERENCES "Products"("ProductID"),
	PRIMARY KEY("OrderDetailID" AUTOINCREMENT)
);


----------------------------------------------------------------------------------
66_CREAR UNA VISTA
----------------------------------------------------------------------------------
CREATE VIEW consulta AS 
SELECT FirstName, Reward, Month FROM Employees AS E
LEFT JOIN Rewards R ON E.EmployeeID = R.EmployeeID

UNION ALL

SELECT FirstName, Reward, Month FROM Rewards R
LEFT JOIN Employees AS E ON E.EmployeeID = R.EmployeeID


----------------------------------------------------------------------------------
67_ELIMINAR UNA VISTA
----------------------------------------------------------------------------------
DROP VIEW IF EXISTS consulta
