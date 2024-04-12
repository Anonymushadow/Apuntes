import 'dart:math';

import 'package:flutter/material.dart';

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
  double _width = 100.0;
  double _height = 100.0;
  Color _color = Colors.teal;
  BorderRadius _borderRadius = BorderRadius.circular(10);

  void _cambiarContainer(){
    final random = Random();
    _width = random.nextInt(350).toDouble();
    _height = random.nextInt(350).toDouble();
    _color = Color.fromRGBO(random.nextInt(255), random.nextInt(255), random.nextInt(255), 1);
    _borderRadius = BorderRadius.circular(random.nextInt(20).toDouble());
    setState((){});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            backgroundColor: Colors.teal,
            title: Text("AnimatedContainer")
        ),
        body: Column(
          children: [
            Expanded(
                child: Center(
                  child: AnimatedContainer(
                    duration: Duration(milliseconds: 300),
                    curve: Curves.easeInCubic,
                    height: _height,
                    width: _width,
                    decoration: BoxDecoration(
                      color: _color,
                      borderRadius: _borderRadius,
                    ),
                  ),
                )
            ),
            RaisedButton(
              //onPressed: _cambiarContainer;
              onPressed: (){
                _cambiarContainer();
                },
              child: Text("Cambiar Contenedor"),
            )
          ],
        )
    );
  }
}
