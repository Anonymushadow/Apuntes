#include <stdio.h>
int main(void){
    char color[20];
    char pluralNoun[20];
    char celebrityN[20];
    char celebrityL[20];
    
    printf("Enter a color: ");
    scanf("%s\n", color);
    
    printf("Enter a plural noun: ");
    scanf("%s\n", pluralNoun);
    
    printf("Enter a celebrity name: ");
    scanf("%s\n", celebrityN);
    
    printf("Enter a celebrity lastname: ");
    scanf("%s\n", celebrityL);
    
    printf("Roses are %s\n", color);
    printf("%s are blue\n", pluralNoun);
    printf("i love you %s %s\n", celebrityN, celebrityL);
    
    return 0;
}

