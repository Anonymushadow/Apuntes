#include <stdio.h>

int main(void){
    //creamos un archivo y guardamos informacion dentro (podemos crear cualquier tipo de archivo con la extencion debida)
    //fopen(nombre del archivo y acciones)
    //r --> read
    //w --> write (reemplazar)
    //a --> agregar
    //si no pongo la ruta absoluta o la ruta relativa va a crearlo en el mismo directorio donde esta el archivo c
    FILE * fpointer = fopen("employees.txt", "w");
    
    //escribimos en el archivo, donde le pasamos donde va a escribir y que va a escribir
    fprintf(fpointer, "Hello World");
    
    fclose(fpointer);
    
    //creamos un archivo y guardamos informacion dentro sin borrar la anterior
    FILE * fpointer2 = fopen("employees2.txt", "a");
    
    fprintf(fpointer2, "Hello World");
    
    fclose(fpointer2);
    
    //abrimos un archivo y leemos su contenido
    char line[255];
    FILE * fpointer3 = fopen("employees.txt", "r");
    
    //solo guarda una linea asi que hay que ponerlo la cantidad de veces que filas tenga
    fgets(line, 255, fpointer3);
    printf("%s", line);
    
    fclose(fpointer3);
    
    return 0;
}

