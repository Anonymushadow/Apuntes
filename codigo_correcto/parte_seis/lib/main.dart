import 'package:codigo_correcto/pages/PaginaHome.dart';
import 'package:codigo_correcto/pages/PaginaUser.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: "Mi aplicacion",
        home: Inicio()
    );
  }
}

class Inicio extends StatefulWidget {

  @override
  _inicioState createState() => _inicioState();
}

class _inicioState extends State<Inicio> {

  int _paginaActual = 0;
  List<Widget> _Paginas = [
    PaginaHome(),
    PaginaUser()
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
        title: "App",
        home: Scaffold(
            appBar: AppBar(
            ),
            body: _Paginas[_paginaActual],
          bottomNavigationBar: BottomNavigationBar(
            onTap: (index){
              //al tocar se envia el numero del icono tocado (index) y este se pasa a pagina
              setState((){
                _paginaActual = index;
              });
            },
            currentIndex: _paginaActual,
            items: [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
              BottomNavigationBarItem(icon: Icon(Icons.supervised_user_circle), label: "Users"),
            ],
          ),
        )
    );
  }
}



