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

bool _iniciada = false;
class _inicioState extends State<Inicio> {

  //lista = array
  List<Persona> _persona = [
    Persona("Jose", "Galdamez", "+5491189452283"),
    Persona("Pablo", "Perez", "+5490089452283"),
    Persona("Christopher", "Garcia", "+5497889452283"),
    Persona("Maria", "Rodriguez", "+5496689452283"),
    Persona("Laura", "Dominguez", "+5494589452283"),
    Persona("Cristina", "Ramos", "+5491289354283"),
    Persona("Ana", "Dominguez", "+5494589452283"),
    Persona("Manuel", "Dominguez", "+5494589452283"),
    Persona("Lucio", "Dominguez", "+5494589452283"),
    Persona("Ariel", "Dominguez", "+5494589452283"),
    Persona("Lautaro", "Dominguez", "+5494589452283"),
    Persona("Paola", "Dominguez", "+5494589452283"),
    Persona("Carla", "al", "+5494589452283"),
    Persona("Lucas", "Espinoza", "+5494589452283"),
  ];
  //list<Personas> es una lista que solo acepta elemeentos de la clase persona

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.teal,
          title: Text("Listas")
      ),
      body: ListView.builder(
        itemCount: _persona.length,
          itemBuilder: (context, index){
            //index = (i = 0; i < itemCount; i++)
            return ListTile(
              onTap: (){
                print(_persona[index].name);
              },
              onLongPress: (){
                this._borrarPersona(context, _persona[index]);
              },
              title: Text((_persona[index].name + " " +_persona[index].lastname)),
              subtitle: Text(_persona[index].phone),
              leading: CircleAvatar(
                child: Text(_persona[index].name.substring(0,1)),
                backgroundColor: Colors.deepPurple,
              ),
              trailing: Icon(Icons.arrow_forward_ios),
            );
          }
      )
    );
  }

  _borrarPersona(context, Persona persona){
    showDialog(
        context: context,
        builder: (_)=> AlertDialog(
          title: Text("Eliminar Contacto"),
          content: Text("¿Esta seguro de eliminar a " + persona.name + "?"),
          actions: [
            FlatButton(
                onPressed: (){
                  Navigator.pop(context);
                },
                child: Text("Cancelar", style: TextStyle(color: Colors.blue))
            ),
            FlatButton(
                onPressed: (){
                  Navigator.pop(context);
                  this.setState(() {
                    this._persona.remove(persona);
                  });
                },
                child: Text("Aceptar", style: TextStyle(color: Colors.red))
            )
          ],
        ));
        }
  }

class Persona {
  String name;
  String lastname;
  String phone;

  Persona(this. name, this.lastname, this.phone){}
}