package com.example.variables

open class Guitarra: MainActivity.Personas.Instrumentos{
    var color:String = ""

    constructor(color:String, nombre:String, tipo:String):super(nombre, tipo){//super accede al constructor de la clase principal
        this.color = color
    }

    fun afinar(){
        println("Se esta afinando la guitarra")
    }

    override fun tocar(){
        //super.tocar()//toca como el padre  --> no funciona xque ahora el padre no tiene tocar, lo tiene abstracto
        println("se esta rascando")//toca como la guitarra
    }
}