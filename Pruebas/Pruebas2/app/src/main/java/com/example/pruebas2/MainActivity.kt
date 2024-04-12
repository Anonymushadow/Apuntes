package com.example.pruebas2

import android.content.res.Configuration
import android.icu.text.CaseMap
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.pruebas2.ui.theme.Pruebas2Theme


/*
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Pruebas2Theme{
                inicio()
            }
        }
    }
}

@Preview(showSystemUi = true)
@Preview(uiMode = Configuration.UI_MODE_NIGHT_YES)
@Composable()
fun inicio() {
    parte1("Texto")
}


@Composable
fun parte1(txt:String) {
    var state = rememberScrollState()
    LazyColumn(
        modifier = Modifier
            .background(MaterialTheme.colors.primary)
            .padding(16.dp)
            .fillMaxSize()
            .verticalScroll(state),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item {
            Image(painter = painterResource(id = R.drawable.ic_launcher_foreground),
                contentDescription = "Imagen de preuba",
                modifier = Modifier
                    .fillMaxWidth()
                    .background(MaterialTheme.colors.primaryVariant),
                alignment = Alignment.Center
            )
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
            Text(text = txt, color = MaterialTheme.colors.primaryVariant, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontSize = 30.sp)
        }
    }
}
*/

private val msg: List<MyMessage> = listOf(
    MyMessage("Titulo 1", "Cuerpo"),
    MyMessage("Titulo 1", "Cuerpo"),
    MyMessage("Titulo 1", "Cuerpo"),
    MyMessage("Titulo 1", "Cuerpo"),
    MyMessage("Titulo 1", "Cuerpo"),
    MyMessage("Titulo 1", "Cuerpo")
)

class MainActivity: ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?){
        super.onCreate(savedInstanceState)
        setContent {
            Pruebas2Theme(){
                MyMessages()
            }
        }
    }
}




@Composable
fun MyComponent() {
    Row(modifier = Modifier
        .background(MaterialTheme.colors.background)
        .padding(8.dp)){
        MyImage()
        MyTexts(msg)
    }
}

@Composable
fun MyImage() {
    Image(
        painter = painterResource(id = R.drawable.ic_launcher_foreground),
        contentDescription = "Imagen",
    modifier = Modifier
        .size(64.dp)
        .clip(CircleShape)
        .background(MaterialTheme.colors.primary))
}

data class MyMessage(var title: String, var body: String)

@Composable
fun MyTexts(Msg: List<MyMessage>) {
    Column(modifier = Modifier.padding(start = 8.dp)) {
        MyText(
            "Hola Jetpack Compose",
            MaterialTheme.colors.primary
        )
        Spacer(modifier = Modifier.height(16.dp))
        MyText(
            "Hola Jetpack Compose 2",
            MaterialTheme.colors.primary
        )
    }
}

@Composable
fun MyText(text: String, color: Color) {
    //textos
    Text(text,
        color = color,
    fontSize = 15.sp
    )
}

@Composable
fun MyMessages() {
    MyComponent()
}

@Preview(showSystemUi = true)
@Preview(uiMode = Configuration.UI_MODE_NIGHT_YES, showSystemUi = true)
@Composable
fun PreviewComponent() {
    var ScrrollState = rememberScrollState()
    Pruebas2Theme() {
        Column(modifier = Modifier.verticalScroll(ScrrollState)) {
            MyMessages()
        }
    }
}