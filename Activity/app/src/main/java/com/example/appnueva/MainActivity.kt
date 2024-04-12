package com.example.appnueva

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        var helloText = findViewById<TextView>(R.id.Txt)

        helloText.text = "Hello World"

        var tag = "MainActivity"

        fun onDestroy(){
            helloText.text = "Destroy"
            super.onDestroy()
        }

        fun onStart(){
            helloText.text = "Start"
            super.onStart()
        }


        fun onStop(){
            helloText.text = "Stop"
            super.onStop()
        }

        fun onResume(){
            helloText.text = "Resume"
            super.onResume()
        }

        fun onPause(){
            helloText.text = "Pause"
            super.onPause()
        }
    }
}
