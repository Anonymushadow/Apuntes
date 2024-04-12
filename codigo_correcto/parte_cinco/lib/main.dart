import 'dart:convert';
import 'package:codigo_correcto/models/Gif.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: "Mi aplicacion", home: Inicio());
  }
}

class Inicio extends StatefulWidget {
  @override
  _inicioState createState() => _inicioState();
}

class _inicioState extends State<Inicio> {
  late Future<List<GIF>> _listadoDeGifs;

  Future<List<GIF>> _getGifs() async {
    final response = await http.get(Uri.parse(
        'https://api.giphy.com/v1/gifs/trending?api_key=0l5BZ84RXEuQGK2pVbp855y1U7XocK9b&limit=10&rating=g')
    );

    List<GIF> gifs = [];

    if (response.statusCode == 200) {
      //200 = correcto
      String body = utf8.decode(response.bodyBytes);

      final jsondata = jsonDecode(body);
      for (var item in jsondata["data"]) {
        gifs.add(GIF(item["title"], item["images"]["downsized"]["url"]));
      }
      return gifs;

      //print(jsondata["data"][0]["type"]);
      //["data"] = lista data
      //[0] = objeto 0
      //["type] = propiedad type
    } else {
      throw Exception("Fallo la conexion");
      print("Error.. ups");
    }
  }

  //al iniciar la ventana se ejecuta esto
  @override
  void initState() {
    super.initState();
    _listadoDeGifs = _getGifs();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.redAccent, title: Text("APIS")
          //en pubspec.yaml/dependences --> poner http: ^0.13.4
          ),
      body: FutureBuilder (
        //
        future: _listadoDeGifs,
        //que voy a construir
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return ListView(
                children: _listGifs(snapshot.data)
          );
          } else if (snapshot.hasError) {
            print(snapshot.error);
            return Text("Error");
          }
          return Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}

List<Widget> _listGifs(List<GIF> data) {

  List<Widget> gifs = [];
  for (var gif in data) {
    gifs.add(Card(
        child: Column(
          children: [
            Expanded(child: Image.network(
              gif.url,
              fit: BoxFit.fill,
            )
            )
          ],
    )));
  }

  return gifs;
}
