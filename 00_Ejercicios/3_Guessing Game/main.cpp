#include <stdio.h>

int main(void){
    int secretNum = 22;
    int guess;
    
    while(guess != secretNum){
        printf("Hey Man Tell Me A Number\n");
        scanf("%i\n", guess);
    }
    printf("You Win");
    
    
    return 0;
}

