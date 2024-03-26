#CREAR LA BASE DE DATOS
#CREATE DATABASE curso;

#TRABAJAR EN LA BASE CURSO
#USE curso;

#CREAR UNA TABLA
/*
CREATE TABLE usuarios(
	id int(11) NOT NULL AUTO_INCREMENT,
	nombre varchar(80) NOT NULL,
    apellido varchar(80) NOT NULL,
    fecha_nacimiento DATETIME NULL,
    PRIMARY KEY (ID)
);
*/

#ELIMINAR TABLA:
#DROP TABLE IF EXISTS publicaciones;

#AÑADIR COLUMNA:
#ALTER TABLE usuarios ADD COLUMN telefono varchar(45) NULL;

#MODIFICAR COLUMNA:
#ALTER TABLE usuarios MODIFY COLUMN telefono varchar(30) NULL;

#AGREGAR DATOS A LA TABLA
/*
INSERT INTO usuarios(
	nombre, apellido, fecha_nacimiento, telefono)
VALUES("Lucas", "Moy", "1998-04-04 10:00:00", "1234123123");
*/

#ELIMINAR DATOS DE UNA TABLA
#DELETE FROM usuarios WHERE id = "1";

#BORRAR TODOS LOS DATOS DE LA BASE
#DELETE FROM usuarios;

#MODIFICAR DATOS 
#UPDATE usuarios SET nombre = "Pepe", apellido = "Angelini" where id = "2";

#MODIFICAR DATOS 
#UPDATE usuarios SET nombre = "Pepe", apellido = "Angelini";

#BUSCAR TODOS LOS USUARIOS
#SELECT * FROM usuarios;

#BUSCAR UN USUARIO ESPECIFICO
#SELECT * FROM usuarios WHERE id = "2";

#BUSCAR DATOS ESPECIFICOS DE USUARIOS ESPECIFICOS
#SELECT nombre, apellido FROM usuarios WHERE id = "3";

#BUSCAR CON MAS DE UNA CONDICION
#SELECT * FROM usuarios WHERE id > "2" AND apellido = "Perez"; 

#BUSCAR CON UNA CONDICION U OTRA
#SELECT * FROM usuarios WHERE id > "3" OR apellido = "Perez";

#CONTAR CANTIDAD DE FILAS
#SELECT COUNT(*) FROM usuarios;

#CONTAR CANTIDAD DE FILAS CON CIERTOS DATOS
#SELECT COUNT(*) FROM usuarios WHERE id < 3;

#CAMBIAR EL NOMBRE DE LA COLUMNA QUE SE CREA AL CONTAR
#SELECT COUNT(*) AS "Cantidad" FROM usuarios;

#SELECCIONAR INFORMACION ESPECIFICA CUANDO NO SABES COMO COMIENZA
#SELECT * FROM usuarios WHERE nombre LIKE "%ton";

#SELECCIONAR INFORMACION ESPECIFICA CUANDO NO SABES COMO TERMINA
#SELECT * FROM usuarios WHERE nombre LIKE "Ra%";

#SELECCIONAR INFORMACION QUE CONTIENE CIERTOS DATOS
#SELECT * FROM usuarios WHERE nombre LIKE "%at%";

#RELACIONAR TABLAS
/*
CREATE TABLE publicaciones(
	id int(11) NOT NULL AUTO_INCREMENT,
	autor_id int(11) NOT NULL,
    titulo varchar(80) NOT NULL,
    texto varchar(80) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (autor_id) REFERENCES usuarios (id)
    );
*/

#CONSULTAS A MULTIPLES TABLAS
#SELECT p.*, CONCAT(u.nombre,  " ", u.apellido) AS "autor" FROM publicaciones p, usuarios u WHERE p.autor_id = u.id;

#VER SOLO LAS COLUMNAS DESEADAS DE LAS DOS COLUMNAS
#SELECT p.id, p.titulo, p.texto, CONCAT(u.nombre,  " ", u.apellido) AS "autor" FROM publicaciones p, usuarios u WHERE p.autor_id = u.id;

#UTILIZAR LAS CLAVES FORANEAS EN VEZ DE ESTAR VERIFICANDO
#SELECT p.id, p.titulo, p.texto, CONCAT(u.nombre,  " ", u.apellido) AS "autor" FROM publicaciones p INNER JOIN usuarios u ON p.autor_id = u.id;

#VALOR MAXIMO
#SELECT MAX(precio) FROM productos

#VALOR MINIMO
#SELECT MIN(precio) FROM productos

#VALOR PROMEDIO
#SELECT AVG(precio) FROM productos

#SUMA
#SELECT SUM(precio) FROM productos

#SUBCONSULTAS
/*
SELECT * FROM publicaciones WHERE autor_id IN (
	SELECT id FROM usuarios
);
*/
/*
SELECT * FROM publicaciones WHERE autor_id IN (
	SELECT id FROM usuarios WHERE nombre LIKE "L%" 
);
*/
/*
SELECT * FROM publicaciones WHERE autor_id NOT IN (
	SELECT id FROM usuarios WHERE nombre LIKE "L%" 
);
*/

#CONCATENACION DE USUARIOS
/*
SELECT * FROM usuarios WHERE nombre LIKE "%L"
UNION
SELECT * FROM usuarios WHERE nombre LIKE "%p";
*/

#EVITAR REPETICIONES
#SELECT * FROM usuarios GROUP BY apellido; 
#SELECT * FROM usuarios GROUP BY MONTH(fecha_nacimiento); 

#ORDENAR
#SELECT * FROM usuarios ORDER BY id DESC;
#SELECT * FROM usuarios ORDER BY id ASC;

#AGRUPAR SEGUN EL MES
SELECT COUNT(*), MONTH(fecha_nacimiento) FROM ususarios GROUP BY MONTH(fecha_nacimiento);








#------------------------------------------------
#ACCIONES YA DESCRITAS ANTERIORMENTE
/*
#AGREGAMOS DATOS A LA TABLA PUBLICACIONES
INSERT INTO publicaciones (
	autor_id, titulo, texto
) VALUES ("3", "Prueba de Publicaciones", "Texto de prueba");



#CREAR UNA TABLA

#CREO LA TABLA PRODUCTOS
CREATE TABLE productos(
	id int(11) NOT NULL AUTO_INCREMENT,
	nombre varchar(80) NOT NULL,
    precio double,
    PRIMARY KEY (ID)
);


*/
