package com.example.appdevexperto

import android.app.Notification
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.GridCells
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyVerticalGrid
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.PlayCircleOutline
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Share
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily.Companion.Monospace
import androidx.compose.ui.text.font.FontStyle.Companion.Italic
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.em
import androidx.compose.ui.unit.sp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import coil.compose.rememberImagePainter
import com.example.appdevexperto.ui.theme.AppDevExpertoTheme

@Composable
fun Pantalla1(
    navegarPantalla2: (String)-> Unit
) {
    var textValue by remember { mutableStateOf("")}
    LazyColumn(){
        item{
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")
            Text(text = "Pantalla 1")

            TextField(
                value = textValue,
                onValueChange = {textValue = it},
                label = {Text("Introducir un texto")}
            )

            Button(onClick = {navegarPantalla2(textValue)}){
                Text(text = "Abrir pantalla 2")
            }
        }
    }
}