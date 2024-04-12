#include <stdio.h>
int main(void){
    int number = 100;
    switch(number){
        case 1:
            printf("Your number is 1\n");
            break;
        case 2:
            printf("Your number is 2\n");
            break;
        case 3:
            printf("Your number is 3\n");
            break;
        case 4:
            printf("Your number is 4\n");
            break;
        default:
            printf("Your number is not in the list");
            break;
    }
    
    return 0;
}

