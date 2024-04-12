#include <stdio.h>

void sumar(int num1, int num2){
    printf("%d", num1 + num2);
}

void restar(int num1, int num2){
    printf("%d", num1 - num2);
}

void multiplicar(int num1, int num2){
    printf("%d", num1 * num2);
}

void dividir(int num1, int num2){
    printf("%d", num1 / num2);
}

int main(){
    int num1;
    int num2;
    char operador;
    
    float resulatdo;
    printf("Ingrese un numero\n");
    scanf("%d", num1);
    printf("ingrese otro numero\n");
    scanf("%d", num2);
    printf("ingrese un operador matematico\n");
    scanf("%c", operador);
    
    if(operador == "+"){
        sumar(num1, num2);
    }else if(operador == "-"){
        restar(num1, num2);
    }else if(operador == "*"){
        multiplicar(num1, num2);
    }else if(operador == "/"){
        dividir(num1, num2);
    }else{
        printf("Lo sentimos pero esta operacion no esta disponible");
    }
    
    return 0;
}

