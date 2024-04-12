#include <stdio.h>
#include <stdlib.h>

//si creamos una macro creamos una constante desde el inicio de la app
#define PI = 3.14
//pero si creamos una constante con const esta se crea al momento de ejecutar esa linea
int main(void){
    int age;
    char grade;
    //entre los corchetes hay que especificar la cantidad de caracteres que puede contener, el maximo
    char name[20];
    printf("Enter your age: \n");
    scanf("%i\n", &age);
    
    printf("Enter your caracter: \n");
    scanf("%i\n", &grade);
    
    printf("Enter your name: \n");
    //cuando se trata de strings no hace falta poner &
    //cons scanf() solo tomamos  los datos hasta el espacio o salto de linea
    scanf("%s\n", &name);
    
    
    printf("Enter your name: \n");
    //para leer nombres con espacios ponemos fgets
    //se pone la variable donde se guarda, la cantidad der caracteres maximos y el tipo de input
    //stdin = standard input --> significa que obtiene el input del teclado
    fgets(name2, 20, stdin);
    //la unica desventaja es que al tocar enter se guarda como un salto de linea, esto tambien se almacena en la variable
    
    printf("your age is: %i\n", age);
    printf("your grade is: %c\n", grade);
    printf("your grade is: %s\n", name);
    printf("your grade is: %s\n", name2);
    
    return 0;
}
