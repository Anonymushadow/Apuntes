#include <stdio.h>

int max(int num1, int num2) {
    int result;
    if(num1 > num2){
        result =  num1;
    }else if(num2 > num1) {
    result = num2;
    }else{
        result = num1 + num2;
    }
    return result;
}

int main(){
    printf("%i", max(2, 4));
    return 0;
}
