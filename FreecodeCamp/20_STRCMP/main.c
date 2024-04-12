#include <stdio.h>
#include <string.h>

struct Animal{
    char especie[5];
    char nombre[20];
    char sexo[10];
    int edad;
};
struct Animal animal[100];

int main(void){
    strcpy(animal[0].especie, "Gato");
    strcpy(animal[0].nombre, "Tomas");
    strcpy(animal[0].sexo, "Masculino");
    animal[0].edad = 3;
    //con strcmp podemos verificar si dos cadenas son iguales o si una es mayor o menor
    if(!strcmp(animal[0].especie, "Gato")){
        printf("Respuesta: %s", animal[0].especie);
    }else{
        printf("False");
    }

    //con getch() esperamos a que el usuario toque alguna tecla para continuar
    getch();
    return 0;
}