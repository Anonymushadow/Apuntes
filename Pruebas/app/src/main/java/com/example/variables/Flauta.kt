package com.example.variables

//en flauta se reciben los parametros, y en instrumentos se envian esos dos datos al constructor del padre(osea de intrumentos)
class Flauta(tam:String, nombre:String, tipo:String) : MainActivity.Personas.Instrumentos(nombre, tipo){

    var tamaño:String = tam

    fun brillar(){
        println("como brilla la flauta")
    }

    override fun tocar(){
        println("se esta soplando")
    }
}