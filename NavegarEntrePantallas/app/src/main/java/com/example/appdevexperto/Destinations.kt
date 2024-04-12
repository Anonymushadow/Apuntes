package com.example.appdevexperto

sealed class Destinations(
    val route: String //este route va a servir como un id
){
    object Pantalla1: Destinations("Pantalla1")
    object Pantalla2: Destinations("Pantalla2/?newText={newText}"){
        fun createRoute(newText:String) = "Pantalla2/?newText=$newText"
    }
}
