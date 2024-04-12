#include <stdio.h>

//LAS FUNCIONES VAN ANTES DEL MAIN YA QUE DE LO CONTRARIO LLAMAS A UNA FUNCION QUE TODAVIA NO EXISTE

void sayHi() {
    printf("Hi \n");
}

void sayHiToUser(char name[10]){
	printf("Hello %s\n", name);
}

int main(){
    sayHi();
    sayHiToUser("Nahuel");
    
    return 0;
}


