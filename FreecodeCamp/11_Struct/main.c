#include <stdio.h>

//los struct funcionan como las clases o como arrays con vario tipos de datos
struct Student{
    char name[50];
    char major[50];
    int age;
    double gpa;
};

int main(void){
    //creamos un objeto de la estructura Student
    struct Student student1;
    //struct + elStructDelCualSeVaACrearElObjeto + nombreDelObjeto
    student1.age = 22;
    //como los strings son un array de caracteres no podemos ponerlo student1.name = "..."
    //para esto existe strcpy
    //a strcpy le pasamos la variable donde vamos a guardar el string y el string
    strcpy(student1.name, "Nahuel");
    strcpy(student1.major, "Business");
    student1.gpa = 2.5;
    
    printf("%.2f\n", student1.gpa);
    printf("%s\n", student1.name);
    printf("%i\n", student1.age);
    printf("%s\n", student1.major);
    
    return 0;
}

