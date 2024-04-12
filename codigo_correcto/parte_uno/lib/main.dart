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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: cuerpo()
    );
  }
}

Widget cuerpo(){
  return Container(
    decoration: BoxDecoration(
      image: DecorationImage(image: NetworkImage("https://i.pinimg.com/originals/0f/60/96/0f60965d24ecb1f1fafa0a719643b444.jpg"),
      fit: BoxFit.cover
      )
    ),
    child: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          nombre(),
          campoUsuario(),
          campoPassword(),
          SizedBox(height: 10),
          btnIngreso()
        ]
      )
    ),
  );
}
  
Widget nombre(){
  return Text("Ingresar",
    style: TextStyle(color: Colors.white,
      fontSize: 35.0,
      fontWeight: FontWeight.bold,
    ),);
}
  
Widget campoUsuario(){
  return Container(
    padding: EdgeInsets.symmetric(horizontal: 15, vertical: 5),
    child: TextField(
      decoration: InputDecoration(
          hintText: "Ingrese su nombre",
          fillColor: Colors.white,
          filled: true
      ),
    )
  );
}

Widget campoPassword(){
  return Container(
      padding: EdgeInsets.symmetric(horizontal: 15, vertical: 5),
      child: TextField(
        obscureText: true,
        decoration: InputDecoration(
            hintText: "Ingrese su contraseña",
            fillColor: Colors.white,
            filled: true
        ),
      )
  );
}

Widget btnIngreso(){
  return FlatButton(
    color: Colors.blueAccent,
      padding: EdgeInsets.symmetric(horizontal: 60, vertical: 10),
      onPressed: (){},
      child: Text("Entrar", style: TextStyle(fontSize: 25, color: Colors.white),
      )
  );
}
  
  

//Hello World
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text("Mi Aplicacion Flutter"),
      ),
      body: Center(
        child: new Text("Contenido")
      )
    );
  }
 */




//Imagenes
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
        body: ListView(
          children: <Widget>[
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://b-static.besthdwallpaper.com/power-ranger-lord-drakkon-wallpaper-1680x1050-93740_5.jpg"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://i.pinimg.com/736x/2c/45/97/2c4597e37d7f1939a416128b92ae8e49.jpg"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://static.wikia.nocookie.net/powerrangers/images/2/21/LordDrakkonReenergized.jpeg/revision/latest?cb=20210915164311"),
            ),
            Container(
              child: Image.network("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbtElOwhGlCWOj9zo-AjmiYbcdcWNiJTGHWnVXV-K5vJqwNyHuO23tZOBF0fuIKmNTRg&usqp=CAU"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://i.pinimg.com/originals/b4/18/a6/b418a6bbd5bf450346904ca8b0b7d283.jpg"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://preview.redd.it/pivli3hbpi001.jpg?auto=webp&s=3b81d32a289a9651d43bbe31e2183d523b5e6c29"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://ih1.redbubble.net/image.943890109.7347/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjcXabnL5v4ZbYtK0B1yt40Nfkap5EfiJhK81wHzci2iIs6A8_YkpYnMV838YoEp6QOE&usqp=CAU"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("http://www.morphinlegacy.com/wp-content/uploads/2018/04/Lord-Drakkon-1st-Form-Shattered-Grid.jpg"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://static.wikia.nocookie.net/powerrangers/images/2/26/Evil_Alternate_Tommy.jpg/revision/latest?cb=20200520123948"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://static.wikia.nocookie.net/divided-destiny/images/9/96/Lord_Drakkon.jpg/revision/latest?cb=20200303125824"),
            ),
            Container(
              padding: EdgeInsets.all(10),
              child: Image.network("https://i0.wp.com/gamerstyle.com.mx/wp-content/uploads/2019/03/Power-Rangers-Lord-Drakkon-Gamer-Style-10.jpg?resize=640%2C450&ssl=1"),
            ),
          ]
        )
    );
  }
}
 */




//Botones
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
      body: new Center(
        child: RaisedButton(
            child: Text("Press me"),
            onPressed: (){
              var time = DateTime.now();
              print(time);
            }
        ),
      )
    );
  }
}
*/




//botones 2
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
      body: new Center(
        child: RaisedButton(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                Icon(Icons.access_time),
                SizedBox(
                  width: 7
                ),
                Text("Now")
              ],
            ),
            onPressed: (){
              var time = DateTime.now();
              print(time);
            }
        ),
      )
    );
  }
}
*/



//centrar en columnas
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.width,
                child: Text("Hola 01", textAlign: TextAlign.center)
            ),
            Text("Hola 02")
          ],
        )
    );
  }
}
 */



//Centrar en filas
/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
        body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Container(
                child: Text("Hola 01", textAlign: TextAlign.center)
            ),
            Text("Hola 02")
          ],
        )
    );
  }
}
 */




/*
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Mi Aplicacion Flutter"),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Container(
                width: MediaQuery.of(context).size.width * .5,
                child: Text("Hola 01", textAlign: TextAlign.center)
            ),
            Text("Hola 02")
          ],
        )
    );
  }
}
 */