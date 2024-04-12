#include <stdio.h>

int main(void){
    int num = 0;
    
    //while --> verifica y despues ejecuta
    while(num < 10){
        printf("%i", num);
        num++;
    }
    
    //do while --> ejecuta y despues verifica
    do{
        printf("%i", num);
        num--;
	}while(num > 0);
    
    return 0;
}

