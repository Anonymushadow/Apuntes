package com.example.tutorial

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayCircleOutline
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.rememberImagePainter
import com.example.tutorial.ui.theme.MediaItem
import com.example.tutorial.ui.theme.TutorialTheme
import com.example.tutorial.ui.theme.getMedia
import java.lang.reflect.Type

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            TutorialTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    listas()
                }
            }
        }
    }
}


//texto
/*
@Preview(showSystemUi = true)
@Composable
fun txt() {
    LazyColumn() {
        item {
            Text(
                text = "Hello World",
                fontSize = 25.sp,
                fontStyle = FontStyle.Italic,
                fontWeight = FontWeight.Thin
            )
            Text(
                text = "Hello World",
                fontSize = 40.sp,
                fontStyle = FontStyle.Italic,
                fontWeight = FontWeight.Light,
                fontFamily = FontFamily.Monospace,
                style = MaterialTheme.typography.h4.copy(
                    shadow = Shadow(
                        offset = Offset(10f, 10f),
                        blurRadius = 10f,
                        color = Color.Red.copy(alpha = 0.5f)
                    )
                )
            )
            Text(
                text = "Hello World, Hello mother, Hello Father," +
                        "Hello Dog, Hello Cat, Hello Everyone",
                fontSize = 25.sp,
                fontStyle = FontStyle.Italic,
                fontWeight = FontWeight.ExtraBold,
                letterSpacing = 5.sp,
                textDecoration = TextDecoration.LineThrough,
                lineHeight = 2.em,
                maxLines = 2,
                softWrap = false,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
*/



//imagenes
@Composable
fun imgs(item: MediaItem) {
    //1)
    // Gadle Script/ build.gradle(Module:...)/
    // en la parte de implements añadir -> implementation("io.coil-kt:coil-compose:1.3.2")
    //implementation "androidx.compose.material:material-icons-extended:$compose_version"
    //2)
    // manifests/AndroidManifest.xml
    //añadir -> <uses-permission android:name="android.permission.INTERNET"/>
    //añadir -> android:usesCleartextTraffic="true"
    Box(
        modifier = Modifier
            .height(200.dp)
            .fillMaxWidth(),
        contentAlignment = Alignment.Center
    ) {
        Image(
            painter = rememberImagePainter(
                data = item.thumb,
                /*builder = {
                    transformations(BlurTransformation(LocalContext.current))
                    crossfade(true)
                }*/
            ), contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.FillWidth
        )

        if (item.type == MediaItem.Type.VIDEO) {
            Icon(
                imageVector = Icons.Default.PlayCircleOutline,
                contentDescription = null,
                modifier = Modifier.size(100.dp),
                tint = Color.White
            )
        }
    }
}

//Listas

@Preview(showSystemUi = true)
@Composable
fun listas() {
    LazyColumn(
        contentPadding = PaddingValues(4.dp)
    ) {
        items(getMedia()) { item ->
            imgs(item)
        }
    }
}
