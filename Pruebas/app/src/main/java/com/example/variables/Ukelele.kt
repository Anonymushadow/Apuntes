package com.example.variables

class Ukelele: Guitarra{
    var inst: String = ""
    constructor(tipo:String, color:String, nombre:String):super(color, nombre, tipo){
        this.tipo = tipo
    }

    override fun tocar(){
        print("Como toca el ukelele")
    }

    fun cambiarCuerdas(){
        println("solo 4 cuerdas")
    }
}