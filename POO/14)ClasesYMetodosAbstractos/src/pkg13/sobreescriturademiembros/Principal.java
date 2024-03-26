//las clases abstractas: algo muy generar
//_solo se utilizan como superclases (clases con hijos o clases principales)
//_No pueden instanciar objetos
//_Sirve para dar una idea de como seran sus hijos

//los metodos abstractos:
//metodo que debe contener esa clase pero todavia no sabemos como  implemtentarlo
//(ser vivo -> alimentarse() -> no sabemos como lo hace, pero lo hace)


//como tenes un metodo abstracto tenes una clase abstracta


//si o si los abstractos tienen que implementarse en las clases hijas
package pkg13.sobreescriturademiembros;
public class Principal{
    public static void main(String[] args){
       Planta planta = new Planta();
       Carnivoro carnivoro = new Carnivoro();
       Vegetariano vegetariano = new Vegetariano();;
       
       planta.alimentarse();
       carnivoro.alimentarse();
       vegetariano.alimentarse();
    }
}
