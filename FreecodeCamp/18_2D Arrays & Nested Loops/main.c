#include <stdio.h>

int main(void){
    //2D Arrays --> son arrays con filas y columnas (son matrices)
    //se escribe filas x columnas --> 3x2 = 3 filas y 2 columnas
    int nums[3][2] = {
        {1, 2},
        {3, 4},
        {5, 6}
    };
    
    //Nested Loops
    int i, j;
    for(i = 0; i < 3; i++){
        for(j = 0; j < 2; j++){
            printf("%i\n", nums[i][j]);
        }
    }
    
    return 0;
}

