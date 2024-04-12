#include <stdio.h>
int main(void){
    int luckyNumbers[] = {4, 8, 15, 90, 4, 0, 900};
    printf("%d", luckyNumbers[0]);
    luckyNumbers[0] = 20;
    printf("%d", luckyNumbers[0]);
    
    //creamos un array que no sabemos que contendra, para eso ponemos entre corchetes el valor maximo de elementos admitidos
    int numbers[20];
    //numbers puede tener hasta 20 elementos
    
    //los String son arrays de caracteres
    
    
    return 0;
}
