package com.example.maps

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.maps.ui.theme.MapsTheme
import com.google.android.gms.maps.model.LatLng
import com.google.maps.android.compose.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MapsTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    myGoogleMaps()
                }
            }
        }
    }
}

@Composable
fun myGoogleMaps() {
    var marker = LatLng(28.270833, -16.63916)
    var propiedaes by remember { mutableStateOf(MapProperties(mapType = MapType.HYBRID)) }
    var uiSet by remember { mutableStateOf(MapUiSettings(zoomControlsEnabled = false))}

    GoogleMap(modifier = Modifier.fillMaxSize(),
        properties = propiedaes,
        uiSettings = uiSet
    ) {
        Marker(position = marker, title = "Volcan", snippet = "quien sabe como se llama?")
    }
}


@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MapsTheme {
        Greeting("Android")
    }
}