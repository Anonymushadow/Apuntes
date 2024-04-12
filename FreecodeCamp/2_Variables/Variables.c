#include <stdio.h>
#include <stdlib.h>

int main(void){
    int entero = 5;
    float flotante = 2.903;
    double doble = 20.390;
    char caracter = "A";
    //con los corchetes indicamos que va a tener mas de un contenido ya que es mas de un caracter
    char nombre[] = "Nahuel";
    
    //%s es para escribir variables de tipo string
    printf("Texto: %s\n", nombre);
    
    //%i es para escribir variables de tipo entero
    printf("Entero: %i\n", entero);
    
    //%lf es para escribir variables de tipo double
    printf("Doble: %lf\n", doble);
    
    //%f es para escribir variables de tipo flotante
    printf("Flotante: %f\n", flotante);
    
    //ademas podes poner %.xf donde x es la cantidad de decimales que queres que se muestren
    printf("Flotante especificamente cortado %.2f\n", flotante);
    
    //para modificar una variable solo tenemos que igualarla a otra cosa
    caracter = "B";
   return 0;
}
