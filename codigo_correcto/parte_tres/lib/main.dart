import 'package:codigo_correcto/Pages/Pagina02.dart';
import 'package:flutter/material.dart';
import 'dart:async';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Mi aplicacion",
      home: Inicio()
    );
  }}

class Inicio extends StatefulWidget{

  @override
  _inicioState createState() => _inicioState();
}

class _inicioState extends State<Inicio> {
  Empresa _facebook = new Empresa("Facebook", "Mark Zuckerberg", 50000);

  @override
  void initState(){
    super.initState();
    print(_facebook);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.amber,
          title: Text("Clases")
      ),
      body: Center(
        child: new Text(
            _facebook.nombre,
            style: TextStyle(fontSize: 24)
        ),
      ),
    );
  }
}

class Empresa {
  String nombre;
  String propietario;
  int ingresoAnual;

  Empresa(this.nombre, this.propietario, this.ingresoAnual){
    //this.nombre -->  this.nombre = nombre
    //this.propietario -->  this.propietario = propietario
    //this.ingresoAnual -->  this.ingresoAnual = ingresoAnual
  }
}