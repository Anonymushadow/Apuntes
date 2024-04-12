package com.example.variables

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        variablesYconstantes()
    }

    private fun variablesYconstantes() {
        //Comentario
        /*
        comentarios de varias lineas
        */

        var string = "String"
        var string2: String = "String"
        val constante = "Constante"

        //se puede no definir
        var myFirstVariable = "Hola"

        println(myFirstVariable)
        print(string2)
        println(string)
        println(constante)

        string = "variable cambiada"
        println(string)

        //concatenar
        var strings = string + " " + myFirstVariable

        //if
        var num = 19
        var num2 = 9

        if (num < 10) {
            println("$num es menor a 10")
        } else if (num > 10) {
            println("$num es mayor a 10")
        } else {
            println("$num es igual a 10")
        }

        when (num) {
            2 -> {
                println("menor a 10")
            }

            5 -> {
                println("menor a 10")
            }

            7 -> {
                println("menor a 10")
            }

            10 -> {
                println("igual a 10")
            }

            12 -> {
                println("mayor a 10")
            }

            20 -> {
                println("mayor a 10")
            }

            else -> {
                println("Ni idea")
            }
        }



        when (num2) {
            2, 7, 5 -> {
                println("menor a 10")
            }

            10 -> {
                println("igual a 10")
            }

            12, 20 -> {
                println("mayor a 10")
            }

            else -> {
                println("Ni idea")
            }
        }


        //arrays
        var arreglo: Array<String> = arrayOf("Pepe", "Pedro", "Juan")
        println(arreglo.size)
        println(arreglo.count())
        println(arreglo[0])
        println(arreglo.get(0))

        /*
        arreglo.forEach{ it:String
            println(it)
        }*/
        var arreglo2 = Array(5,
            { i -> "" })//tiene 5 espacios y en cada indice guarda cadena de texto, por default
        println(2 in 1..5)
        println("x" in "a".."y")
        println("pepe" in arreglo)

        var x = 0

        while (x < 5) {
            println(x)
            x++
        }

        do {
            println(x)
        } while (x > 0)

        for (i in 0 until 10 step 3) {//sin incluir al 10 (de 3 en 3
            println(i)
        }

        for (i in 0..10 step 2) {//incluyendo al 10 (de 2 en 2)
            println(i)
        }


        for (i in 10 downTo 0 step 2) {
            println(i)
        }

        var arreglos: Array<String> = arrayOf("Pepe", "Pedro", "Juan")

        for (i in arreglos) {//arreglos = rango
            println(i)//i es tomado como el contenido, no la posicion
        }

        //listas
        val list = listOf(1, 2, 3)//no se puede modificar
        val list2 = mutableListOf(1, 2, 3)// se puede modificar

        list2.add(3, 5)

        //maps o diccionarios --> tienen una clave y un valor
        var mapaNumeros = mapOf("Cod1" to 1, "Cod2" to 2)
        println("mapa: $mapaNumeros")

        var mapaNumeros2 = mapOf(1 to "Cod1", 2 to "Cod2")
        println("mapa: $mapaNumeros2")

        if (1 in mapaNumeros.values) {
            println("Pretenece")
        }
        for (elemento in mapaNumeros) {
            println("key: ${mapaNumeros.keys} \n Valor: ${mapaNumeros.values}")
        }

        fun x() {
            println(2)
            println(4)
            println(5)
            println(7)
        }
        x()
        x()
        x()

        //POO
        open class Persona {
            var documento: String = ""
            var nombre: String = ""
            var edad: Int = 0

            fun caminar() {
                println("la persona esta caminando")
            }

            fun imprimirDatos() {
                var texto = "Nombre: $nombre \n Documento: $documento \n Edad:$edad"
                println(texto)
            }
        }

        //para crear el  objeto:
        var miObjeto: Persona = Persona()//persona() = constructor
        miObjeto.nombre = "Cristian"
        miObjeto.documento = "111"
        miObjeto.edad = 20

        miObjeto.caminar()
        miObjeto.imprimirDatos()
        }

    //constructores
    var miObjeto: Personas = Personas("Pablo", "231", 22)

    class Personas (nombre:String, documento:String, edad:Int){
        var documento: String = documento
        var nombre: String = nombre
        var edad: Int = edad

        fun caminar() {
            println("la persona esta caminando")
        }

        fun imprimirDatos() {
            var texto = "Nombre: $nombre \n Documento: $documento \n Edad:$edad"
            println(texto)
        }

        init {
            if (edad < 0 ){
                this.edad = 0
            }
        }
/*
        data class notas(var nota1:double, var nota2:double, var nota3:double){

        }
        var estudiante notas = notas()

        object robot(){//no hay que crear un objeto, podes acceder directamente
            var nombre:String = ""

            fun iniciar(){
                println("Robot iniciando")
            }
        }

        robot.nombre = "Robocop"
        robot.iniciar()
*/

        //encapsulamiento
        //puede accederce desde cualquier lado
        public fun nombres(){
            println("Nombre = juan")
        }

        //puede accederse desde el mismo paquete pero no de otros
        protected fun dni(){
            println("DNI = 44909384")
        }

        var password:String = "48c4wojdk"//no hace falta poner el private, ya se da cuenta al recibir un get y set
            get() = field//field seria password en este caso
            set(value) {
                field = value
            }

        //puede accederse desde la misma clase o usando getters y setters
        private fun contraseñas(){
            println("Contraseña = ${password}")
        }

        //herencia
        abstract class Instrumentos(nombre:String, tipo: String){//hace algo peor no se sabe bien como
            var nombre: String = nombre
            var tipo: String = tipo
            var marca: String = ""

            abstract fun tocar() //existe pero no se sabe como asi que en cada hijo le va a modificar
            /*{
                println("Se esta tocando el siguiente intrumento:" +
                        "\n Nombre: ${nombre} " +
                        "\n Tipo: ${tipo}" +
                        "\n Marca: ${marca}")
            }*/

            fun limpiar(){
                println("se esta limpiando")
            }
        }






        var guitarra: Guitarra = Guitarra("Roja", "Guitarrin", "Cuerdas")
        var flauta: Flauta = Flauta("Chica", "Flautin", "Indefinida")


    }
}