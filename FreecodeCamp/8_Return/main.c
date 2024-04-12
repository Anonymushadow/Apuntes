#include <stdio.h>

double cube(double num){
    double result = num * num * num;
    return result;
}

int main(){
    int result = cube(2);
    printf("%d", result);
    
    return 0;
}

