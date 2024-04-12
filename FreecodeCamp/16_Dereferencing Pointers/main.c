#include <stdio.h>

int main(void){
    //desreferenciar es quitarle la direccion, se convertiria simplemente en su contenido
    //un puntero es una direccion donde se almadena algo, al desreferenciar eliminamos esa direccion y nos quedamos solo con el contenido
    int num = 30;
    
    int * pAge = &age;
    
    //para desreferencias ponemos *
    printf("%d", *pAge);
    
    
    
    return 0;
}

