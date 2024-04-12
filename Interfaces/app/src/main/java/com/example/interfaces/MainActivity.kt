package com.example.interfaces

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        iniciar()
        iniciar2()
    }

    fun iniciar(){
        println("iniciar")


        var miClaseC:ClaseC = ClaseC()
        miClaseC.documento = 123
        miClaseC.nombre = "Nahuel"
        miClaseC.imprimirDatos()
        var msj = miClaseC.funcionConParametroConRetorno("Juan")
        println(msj)
        miClaseC.funcionConParametroSinRetorno(4324)
        miClaseC.funcionSinParametroSinRetorno()
        miClaseC.imprimir("Mensaje desde el main")
    }

    fun iniciar2(){
        //forEach
        var perros = arrayOf("Monte", "Blanca", "Bola de nieve", "Pedro", "Chimuelo")

        perros.forEach {
            println("el prerro se llama ${it}")
        }

        try{
            var num = readLine()!!.toInt()
        }catch (e:Exception){
            println("Error: " + e)
        }finally {
            println("tarea finalizada")
        }//podes poner el try cuando llamas a una funcion
    }
}