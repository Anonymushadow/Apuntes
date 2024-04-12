package com.example.tutorial.ui.theme

data class MediaItem(
    val id: Int,
    val title: String,
    val thumb: String,
    val type: Type
){
    enum class Type {PHOTO, VIDEO} //crea las opciones disponibles
}

fun getMedia() = (1..10).map {//crea un listado de 10 elementos
    MediaItem( //se crea el item
        id = it,
        title = "Title $it",
        thumb = "https://lorempixel.com/400/400/people/1/",
        type = if (it % 3 == 0) MediaItem.Type.VIDEO else MediaItem.Type.PHOTO
    //cada 3 videos sale una img
    )
}