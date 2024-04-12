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

bool _iniciada = false;
class _inicioState extends State<Inicio> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("Pagina 01")
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
                color: Color(0xddc52201),
                textColor: Color(0xffffffff),
                child: Text("Terminos y condiciones"),
                onPressed: () =>
                {
                  mostrarAlerta(context)
                }
            ),
            SizedBox(height: 100),
            Text(
                _iniciada ? "Pagina Visitada" : "Pagina no visistada",
                style: TextStyle(fontSize: 20)
            )
          ],
        ),
      ),
    );
  }

  void mostrarAlerta(BuildContext context) {
    showDialog(
        barrierDismissible: false,
        context: context,
        builder: (_) =>
            AlertDialog(
              title: Text("Cambio de pantalla"),
              content: Text("Esta apunto de cambiar de pantalla"),
              actions: [
                TextButton(
                  onPressed: () =>
                  {
                    Navigator.pop(context)
                  },
                  child: Text("Cancelar"),
                ),
                TextButton(
                  child: Text("Aceptar"),
                  onPressed: () {
                    Navigator.pop(context);
                    Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => Pagina02())
                    );
                    setState(() {
                      _iniciada = true;
                    });
                  },
                )
              ],
            )
    );
  }
}