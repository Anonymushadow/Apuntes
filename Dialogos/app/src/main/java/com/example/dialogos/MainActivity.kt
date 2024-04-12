package com.example.dialogos

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.dialogos.ui.theme.DialogosTheme
import kotlin.math.log

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DialogosTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    var show by rememberSaveable() { mutableStateOf(false)}
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        Button(onClick = {show = true}) {
                            Text(text = "Dialogo")
                        }
                    }
                    MyDialog(show, {show = false}, { Log.i("Mensaje: ", "Anonymushadow")})
                }
            }
        }
    }
}


@Composable
fun MyDialog(show: Boolean, onDismiss:() -> Unit, onConfirm:() -> Unit) {
    if (show) {
        AlertDialog(onDismissRequest = {onDismiss()},
            confirmButton = {
                TextButton(onClick = {onConfirm()}) {
                    Text(text = "Confirmar")
                }
            },
            dismissButton = {
                TextButton(onClick = {onDismiss()}) {
                    Text(text = "Cancelar")
                }
            },
            title = { Text(text = "Estas seguro de que quieres salir?") },
            text = { Text(text = ("Esto es un simple texto para rellenar")) }
        )
    }
}
