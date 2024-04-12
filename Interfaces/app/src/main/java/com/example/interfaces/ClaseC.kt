package com.example.interfaces

class ClaseC : ClaseA{
    var documento:Int = 0
    var nombre:String = ""

    fun imprimirDatos(){
        println("Documento: ${documento}, Nombre: ${nombre}")
    }

    override fun funcionSinParametroSinRetorno() {
        println("Funcion 1")
    }

    override fun funcionConParametroSinRetorno(id: Int) {
        println("Funcion 2 --> Id: ${id}")
    }

    override fun funcionConParametroConRetorno(nombre: String): String {
        var mensaje = ("Funcion 3 --> Nombre: ${nombre}")
        return mensaje
    }
}