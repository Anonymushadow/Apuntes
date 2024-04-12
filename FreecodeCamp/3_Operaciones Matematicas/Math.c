#include <stdio.h>
#include <stdlib.h>

int main(void){
    //suma
    printf("Suma: %f\n", 8.9 + 4.5);
    
    //resta
    printf("Resta: %f\n", 8.9 - 4.5);
    
    //multiplicacion
    printf("Multiplicacion: %f\n", 8.9 * 4.5);
    
    //division
    printf("Division: %f\n", 8.9 / 4.5);
    
    //potencia
    printf("Potenciacion: %f\n", pow(2, 3));
    
    //raiz cuadrada
    printf("Raiz Cuadrada: %f\n", sqrt(100));
    
    //redonder hacia arriba
    printf("Redondeo: %f\n", ceil(4.9));
    
    //redonder hacia abajo
    printf("Redondeo: %f\n", floor(4.9));
    
    //numero absoluto
    printf("Absoluto: %d\n", abs(-12));
    
   return 0;
}
