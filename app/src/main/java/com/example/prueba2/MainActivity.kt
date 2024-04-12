package com.example.prueba2

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        pruebas()
    }
    fun pruebas(){
        var arreglo:Array<INT> = arrayOf(1, 2, 3, 4, 5, 6, 7, 8)

        for(i in arreglo){//arreglo seria el rango
            println(i)
        }
    }
}