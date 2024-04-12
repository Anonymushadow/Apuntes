package com.example.interfaces

interface ClaseA {
    fun funcionSinParametroSinRetorno()
    fun funcionConParametroSinRetorno(id:Int)
    fun funcionConParametroConRetorno(nombre:String):String

    fun imprimir(mensaje:String){
        println("Ingresa a la funcion imprimir " +
                "desde la interfaz A")
        println(mensaje)
    }
}