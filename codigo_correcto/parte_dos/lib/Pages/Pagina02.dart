import 'package:flutter/material.dart';

class Pagina02 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Terminos y servicios"),
      ),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          children: [
            Text("Terminos y Condiciones",
            style: TextStyle(
                fontSize: 25,
              fontWeight: FontWeight.bold
            ),
            ),
            SizedBox(height: 25),
            Text("Estas Condiciones del Servicio reflejan el comportamiento comercial de Google, las leyes que se aplican a nuestra empresa y determinados aspectos que siempre hemos considerado ciertos. Como resultado, estas Condiciones del Servicio definen su relación con Google en el marco de su interacción con nuestros servicios. Por ejemplo, estas condiciones incluyen los siguientes temasLo que puede esperar de nosotros, donde se describe cómo brindamos y desarrollamos nuestros serviciosQué esperamos de usted, donde se establecen ciertas reglas para usar nuestros serviciosContenido en los servicios de Google, donde se describen los derechos de propiedad intelectual relacionados con el contenido que aparece en nuestros servicios (ya sea que el contenido le pertenezca a usted, a Google o a otras personas)         En caso de problemas o desacuerdos, donde se describen otros derechos legales que usted tiene y las consecuencias que pueden esperarse si alguien infringe estas condicionesEs importante que comprenda estas condiciones porque el uso de nuestros servicios implica que las acepta.Además de estas condiciones, también publicamos una Política de Privacidad. Si bien no form",
              style: TextStyle(fontSize: 16), textAlign: TextAlign.justify,
            ),
            RaisedButton(
              padding: EdgeInsets.all(15),
                color: Colors.blue,
              textColor: Colors.white,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Aceptar", style: TextStyle(fontSize: 20)),
                  Icon(Icons.arrow_forward_ios)
                ]
              ),
              onPressed: ()=>{
                Navigator.pop(context)
              },
            )
          ],
        ),
      ),
    );
  }
}