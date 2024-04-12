package com.example.appdevexperto

import androidx.compose.runtime.Composable

data class mediaItem(
    val id: Int,
    val title: String,
    val thumb: String,
    val type: Type
) {
    enum class Type { PHOTO, VIDEO }
}


fun getMedia() = (1..100).map {
    mediaItem(
        id = it,
        title = "Title $it",
        thumb = "https://picsum.photos/id/$it/200/300",
        type = if (it % 3 == 0) mediaItem.Type.VIDEO else mediaItem.Type.PHOTO
    )
}
