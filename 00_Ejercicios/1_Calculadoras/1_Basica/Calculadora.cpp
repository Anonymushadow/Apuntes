#include <stdio.h>
#include <stdlib.h>

int main(void){
	int num1;
	int num2;
	printf("Ingrese un numero: \n");
	scanf("%f\n", num1);
	printf("Ingrese un segundo numero: \n");
	scanf("%f\n", num2);
	
	printf("Suma: %i\n", num1 + num2);
	printf("Resta: %i\n", num1 - num2);
	printf("Multiplicacion: %i\n", num1 * num2);
	printf("Division: %f\n", num1 / num2);
    return 0;
}

