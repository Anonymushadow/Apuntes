#include <stdio.h>

int main(void){
    //cada variable consume un espacio en nuestra pc, en nuestra ram
    //para acceder al contenido de la variabloe nosotros ponemos el nombre pero c lo que hace es buscar la direccion en la ram
    int age = 30;
    double gpa = 3.4;
    char grade = "A";
    
    // %p hacer referencia a un pointer
    //aca accedemos a la direccion fisica, la memoria fisica
    printf("Age: %p\nGPA: %p\nGrade: %p", &age, &gpa, &grade);
    
    return 0;
}

