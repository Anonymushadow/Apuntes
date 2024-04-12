package com.example.layouts

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var name = findViewById<EditText>(R.id.nameInput)
        var password = findViewById<EditText>(R.id.passwordInput)
        var enviar = findViewById<Button>(R.id.envio)

        enviar.setOnClickListener {
            var user = name.text
            var psw = password.text

            Toast.makeText(this, "Usuario registrado", Toast.LENGTH_SHORT).show()
            Log.d("xxx..xxx..User", user.toString())
            Log.d("xxx..xxx..Password", psw.toString())
        }
    }
}