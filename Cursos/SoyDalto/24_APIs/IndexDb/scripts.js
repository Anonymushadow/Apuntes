"use strict"
//almacena informacion en el navegador como sesionStorage y localStorage
//tiene una clave y un valor
//crud = create read update delete
//
//es asincrona, no hace falta reiniciar la pagina
//hay que solicitarle al navegador que abra una base de datos
//indexedDb = window.indexeDb
const IDBRequest = indexedDB.open("daltobase", 1);
//IDBRequest es la solicitud, no la base de datos
//aca abris una base de datos, en caso de que no exista la creas
//el 1 es la version

IDBRequest.addEventListener("upgradeneeded", ()=>{
	//aca se crea el almacen de objetos, que es como una tabla donde guardas todo
	const db = IDBRequest.result;
	//ahora se crea un almacen de objetos con nombre y key
	db.createObjectStore("nombres", {
		autoIncrement: true
		//autoincrement aumenta el numero de key cada vez que se crea un objeto para poder diferenciar cada uno
		//tambien se puede poner keypath en vez de autoincrement 
	});
})
//upgradeneeded detecta si hay que crear la base de datos

IDBRequest.addEventListener("success", ()=>{
	console.log("todo correcto");
})
//success detecta que todo salio correctamente

IDBRequest.addEventListener("error", ()=>{
	console.log("hubo un error");
})
//error detecta un error


const addObjeto = objeto => {
	const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
	IDBData.add(objeto);
}

const leerObjetos = ()=>{
	const IDBData = getIDBData("readonly");
	//cursor lee el indexdb
	const cursor = IDBData.openCursor();
	cursor.addEventListener("success", ()=>{
		if (cursor.result) {
			console.log(cursor.result.value);
			//cursor siempre en su ultima vuelta pasa a ser nulo
			cursor.result.continue();
			//continue es para que vuelva a leer una y otra ves mientras sea posible
		}else console.log("todos los datos fueron leidos");
	})
}

const modificarObjeto = (key, objeto) => {
	const IDBData = getIDBData("readwrite", "objeto modificado correctamente");
	IDBData.put(objeto, key);
	//put si no existe lo crea y si existe lo modifica
}

const eliminarObjeto = key => {
	const IDBData = getIDBData("readwrite", "objeto eliminado correctamente");
	IDBData.delete(key);
	//put si no existe lo crea y si existe lo modifica
}

const getIDBData = (mode, msg)=> {
	const db = IDBRequest.result;
	const IDBTransaction = db.transaction("nombres", mode);
	//aca abris una operacion en el object store nombres
	//puede ser readonly que es solo para leer o readwrite que podes leer y modificar
	const objectStore = IDBTransaction.objectStore("nombres");
	//esto es como que permite que lo haga, le da permiso
	IDBTransaction.addEventListener("complete",()=>{
		console.log(msg);
	})
	return objectStore;
}