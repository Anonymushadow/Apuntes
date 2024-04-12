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
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
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

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppDevExpertoTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    start()
                }
            }
        }
    }
}

@Preview(showSystemUi = true)
@Composable
fun start() {
    AppDevExpertoTheme {
        //box()
        //column()
        //row()
        //modificadores()
        //txt()
        //imgs()
        //icono()
        //Listas()
        //LVGrid()
        //Estados()
        toolBar()
        //navBar()


        //inicio()
    }
}
/*
@Composable
fun navBar() {
    //ir a buils.gradle y añadir --> implementation "androidx.navigation:navigation-compose:2.4.0-alpha09"
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "main" ) {
        composable("main"){

        }
    }
}
*/
@Composable
fun toolBar() {
    Scaffold(//se crea el molde
        topBar = {//creamos la barra superior
            TopAppBar(
                title = { Text(text = stringResource(id = R.string.app_name)) },//pone el nombre de la app como titulo
                navigationIcon = {
                    IconButton(onClick = { /*TODO*/ }) {
                        Icon(
                            imageVector = Icons.Default.Menu,
                            contentDescription = null
                        )
                    }

                },
                actions = {
                    IconButton(onClick = { /*TODO*/ }) {
                        Icon(
                            imageVector = Icons.Default.Search,
                            contentDescription = null
                        )
                    }
                    IconButton(onClick = { /*TODO*/ }) {
                        Icon(
                            imageVector = Icons.Default.Share,
                            contentDescription = null
                        )
                    }
                }
            )
        }
    ) { padding ->
        inicio(modifier = Modifier.padding(padding))
    }
}

//dos componentes ocupan el mismo espacio
@Composable
fun box() {
    Box(
        modifier = Modifier
            .fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(text = "Hola Mundo")
        Text(text = "Hello World")
    }
}

@Composable
fun column() {
    Column(
        modifier = Modifier
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Hola Mundo", modifier = Modifier
                .background(Color.Gray)
                .weight(.5f)
        )
        Text(
            text = "Hello World", modifier = Modifier
                .background(Color.Cyan)
                .weight(2f)
        )
        Text(
            text = "Привет, мир", modifier = Modifier
                .background(Color.LightGray)
                .weight(.5f)
        )
    }
}

@Composable
fun row() {
    Row(
        modifier = Modifier
            .fillMaxSize(),
        horizontalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Hola Mundo", modifier = Modifier
                .background(Color.Gray)
                .weight(.5f)
        )
        Text(
            text = "Hello World", modifier = Modifier
                .background(Color.Cyan)
                .weight(2f)
        )
        Text(
            text = "Привет, мир", modifier = Modifier
                .background(Color.LightGray)
                .weight(.5f)
        )
    }
}


@Composable
fun modificadores() {
    Box(
        modifier = Modifier
            .fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Tocame",
            modifier = Modifier
                .clickable { }
                .background(Color.Cyan)
                .border(2.dp, Color.Blue)
                .padding(horizontal = 16.dp, vertical = 8.dp)
        )
    }
}

@Composable
fun txt() {
    LazyColumn() {
        item {
            Text(
                text = "Hello World",
                fontSize = 25.sp,
                fontStyle = Italic,
                fontWeight = FontWeight.Thin
            )
            Text(
                text = "Hello World",
                fontSize = 40.sp,
                fontStyle = Italic,
                fontWeight = FontWeight.Light,
                fontFamily = Monospace,
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
                fontStyle = Italic,
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

@Composable
fun imgs() {
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
                data = "https://picsum.photos/id/1004/200/300",
                /*builder = {
                    transformations(BlurTransformation(LocalContext.current))
                    crossfade(true)
                }*/
            ), contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop
        )
    }
}

@Composable
fun icono() {
    Icon(
        imageVector = Icons.Default.PlayCircleOutline,
        contentDescription = null,
        modifier = Modifier.size(92.dp),
        tint = Color.Black
    )
}


@Composable
fun Listas() {
    LazyColumn(
        contentPadding = PaddingValues(4.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        items(getMedia()) { item ->
            mediaListItem(item)
        }
    }
}

@Composable
fun mediaListItem(item: mediaItem) {
    Box(
        modifier = Modifier
            .height(200.dp)
            .fillMaxWidth()
            .background(Color.Black),
        contentAlignment = Alignment.Center
    ) {
        Image(
            painter = rememberImagePainter(
                data = item.thumb,
            ), contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop
        )

        if (item.type == mediaItem.Type.VIDEO) {
            Icon(
                imageVector = Icons.Default.PlayCircleOutline,
                contentDescription = null,
                modifier = Modifier.size(92.dp),
                tint = Color.White,
            )
        }
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(MaterialTheme.colors.primary),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = item.title,
            style = MaterialTheme.typography.h6,
            color = Color.White
        )
    }
}


@OptIn(ExperimentalFoundationApi::class)
@Composable
fun LVGrid() {
    LazyVerticalGrid(
        contentPadding = PaddingValues(2.dp),
        cells = GridCells.Adaptive(150.dp)
    ) {
        items(getMedia()) { item ->
            lvg(item, Modifier.padding(2.dp))
        }
    }
}

@Composable
fun lvg(item: mediaItem, modifier: Modifier) {
    Column(modifier = modifier) {
        Box(
            modifier = Modifier
                .height(200.dp)
                .fillMaxWidth()
                .background(Color.Black),
            contentAlignment = Alignment.Center
        ) {
            Image(
                painter = rememberImagePainter(
                    data = item.thumb,
                ), contentDescription = null,
                modifier = Modifier.fillMaxSize(),
                contentScale = ContentScale.Crop
            )

            if (item.type == mediaItem.Type.VIDEO) {
                Icon(
                    imageVector = Icons.Default.PlayCircleOutline,
                    contentDescription = null,
                    modifier = Modifier.size(92.dp),
                    tint = Color.White,
                )
            }
        }

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(MaterialTheme.colors.primary),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = item.title,
                style = MaterialTheme.typography.h6,
                color = Color.White
            )
        }
    }
}


//Estados = eventos
@Composable
fun Estados() {
    var txt = rememberSaveable { mutableStateOf("") }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(64.dp),
        verticalArrangement = Arrangement.Center
    ) {
        TextField(
            value = txt.value,
            onValueChange = { txt.value = it },
            modifier = Modifier.fillMaxWidth()
        )
        Text(
            text = txt.value,
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.Cyan)
                .padding(8.dp)
        )
        Button(
            onClick = { txt.value = "" },
            modifier = Modifier.fillMaxWidth(),
            enabled = txt.value.isNotEmpty()
        ) {
            Text(text = "Clear")
        }
    }
}


// inicio --> proyecto
@OptIn(ExperimentalFoundationApi::class)
@Composable
fun inicio(modifier: Modifier = Modifier) {
    LazyVerticalGrid(
        contentPadding = PaddingValues(2.dp),
        cells = GridCells.Adaptive(150.dp),
        modifier = modifier
    ) {
        items(getMedia()) { item ->
            iniciar(item, Modifier.padding(2.dp))
        }
    }
}

@Composable
fun iniciar(item: mediaItem, modifier: Modifier) {
    Column(modifier = modifier) {
        Box(
            modifier = Modifier
                .height(200.dp)
                .fillMaxWidth()
                .background(Color.Black),
            contentAlignment = Alignment.Center
        ) {
            Image(
                painter = rememberImagePainter(
                    data = item.thumb,
                ), contentDescription = null,
                modifier = Modifier.fillMaxSize(),
                contentScale = ContentScale.Crop
            )

            if (item.type == mediaItem.Type.VIDEO) {
                Icon(
                    imageVector = Icons.Default.PlayCircleOutline,
                    contentDescription = null,
                    modifier = Modifier.size(92.dp),
                    tint = Color.White,
                )
            }
        }

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(MaterialTheme.colors.primary),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = item.title,
                style = MaterialTheme.typography.h6,
                color = Color.White
            )
        }
    }
}