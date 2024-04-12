#include <stdio.h>

int main(void){
    //Strlen te indica la cantidad de caracteres antes del nulo. sizeof te indica la cantidad de memoria que ocupa la variable.
    //no funciona y no se xque REVISAR
    int num[10];
    num[0] = 1;
    num[1] = 2;
    num[2] = 3;
    num[3] = 4;
    num[4] = 5;
    int num2[] = {1, 2, 3, 4, 5};

    printf(strlen(num));
    printf(strlen(num2));

    printf(sizeof(num));
    printf(sizeof(num2));
    
    
    return 0;
}

