#include <stdio.h>

int main(void){
    //un pointer o puntero es un espacio en la memoria
    int num = 30;
    double gpa = 3.2;
    char grade = "A";
    
    printf("%p\n", &num);
    printf("%p\n", &gpa);
    printf("%p\n", &grade);
    
    //guardamos una direccion de una variablle dentro de otra variable... guardamos una direccion en una variable
    //ponemos * + p + el nombre de la variable pegada
    int * pAge = &age;
    
    return 0;
}

