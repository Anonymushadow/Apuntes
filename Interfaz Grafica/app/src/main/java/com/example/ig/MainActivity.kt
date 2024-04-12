package com.example.ig

import android.content.ClipData
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.ig.ui.theme.IGTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent{
            previewPersonalData()
        }
    }

    @Composable
    fun personalData() {
        MaterialTheme(){
            Scaffold(
                topBar = {toolBar()},
                content = {LColumn()},
                floatingActionButton = {FAB()},
                floatingActionButtonPosition = FabPosition.End
            )
        }
    }

    @Preview
    @Composable
    fun previewPersonalData(){
        personalData()
    }

    @Composable
    fun FAB(){
        var cont = LocalContext.current
        FloatingActionButton(onClick = { Toast.makeText(cont, "No me toques", Toast.LENGTH_SHORT).show()}) {
            Text(text = "X")
        }
    }

    @Composable
    fun toolBar(){
        TopAppBar(title = {Text(text = "Mi App")}, backgroundColor = colorResource(id = R.color.gold))
    }
    
    @Composable
    fun col(name: String){
        Column(
            modifier = Modifier
                .background(Color.Black)
                .padding(16.dp)
                .fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                painter = painterResource(R.drawable.andoid),
                contentDescription = "Android Logo",
                modifier = Modifier
                    //.clip(shape = CircleShape)
                    .background(Color.Blue)
                    .fillMaxWidth()
                    .height(400.dp)
            )
            Spacer(modifier = Modifier.height(16.dp))

            Text(text = "Mi nombre es ${name}", style = MaterialTheme.typography.h6,
                modifier = Modifier.fillMaxWidth(),
                color = Color.White,
            textAlign = TextAlign.Center)
            Text(text = "Anonymushadow")
            Text(text = "Soy programador")
        }
    }


    @Composable
    fun row(name: String){
        Row(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Image(
                painter = painterResource(R.drawable.andoid),
                contentDescription = "Android Logo",
                modifier = Modifier
                    .size(100.dp)
                    .clip(shape = CircleShape)
                    .background(Color.Red)
            )
            Spacer(modifier = Modifier.height(16.dp))

            Text(text = "Mi nombre es ${name}", style = MaterialTheme.typography.h6)
            Text(text = "Anonymushadow")
            Text(text = "Soy programador")
        }
    }
}

@Composable
fun LColumn() {
    var counter by rememberSaveable{ mutableStateOf(0)}
    LazyColumn(
        modifier = Modifier
            .background(Color.Black)
            .padding(16.dp)
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        item{
            Image(
                painter = painterResource(R.drawable.andoid),
                contentDescription = "Android Logo",
                modifier = Modifier
                    //.clip(shape = CircleShape)
                    .fillMaxWidth()
                    .height(250.dp)
            )
            Row(modifier = Modifier
                .padding(top = 8.dp)
                .fillMaxWidth()) {
                Image(
                    painter = painterResource(id = R.drawable.heart),
                    contentDescription = "Like",
                    modifier = Modifier.clickable {counter++}
                )
                Text(text = counter.toString(), color = Color.White, modifier = Modifier.padding(start = 4.dp))
            }
            //Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "Mi nombre es Nahuel", style = MaterialTheme.typography.h6,
                modifier = Modifier.fillMaxWidth(),
                color = Color.White,
                textAlign = TextAlign.Center,
            )
            Text(text = "Anonymushadow", modifier = Modifier.background(Color.White))
            Text(text = "Soy programador", modifier = Modifier.background(Color.White))
        }
    }
}

@Composable
fun LRow(name: String){
    LazyRow(
        modifier = Modifier
            .background(Color.Blue)
            .padding(16.dp)
            .fillMaxSize(),
        verticalAlignment = Alignment.CenterVertically
    ) {
        item{
            Image(
                painter = painterResource(R.drawable.andoid),
                contentDescription = "Android Logo",
                modifier = Modifier
                    //.clip(shape = CircleShape)
                    .background(Color.Blue)
                    .fillMaxWidth()
                    .height(400.dp)
            )
            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = "Mi nombre es ${name}", style = MaterialTheme.typography.h6,
                modifier = Modifier.fillMaxWidth(),
                color = Color.White,
                textAlign = TextAlign.Center
            )
            Text(text = "Anonymushadow")
            Text(text = "Soy programador")
        }
    }
}