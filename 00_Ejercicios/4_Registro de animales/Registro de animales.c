#include <stdio.h>
#include <string.h>

//creamos una estructura, un molde
struct Animal{
    char especie[6];
    char nombre[20];
    char sexo[10];
    int edad;
};
//con el molde Animal creamos un array de animales con esas caracteristicas
struct Animal animal[100];

//
char res[2];
//
char sx[10];
//
char especie[6];
//
char nombre[20];
//
int edad;
//
char reinicio[] = "si";
//
int menu = 1;
//
int mod;

//creamos funcion para verificar la longitud de un array
int VerificarLongitud(){
    int longitud = 0;
    for(int i = 0; i < 100; i++){
        //un animal no tiene 0 años (en realidad poude tener mese pero ignoremos eso) asi que si tiene 0 es porque no existe
        if(animal[i].edad > 0){
            //si existe un animal en esa posicion aumentamos el contador
            longitud ++;
        }
    }
    if(longitud == 0){
        //si no hay animales devolvemos un -1
        longitud = -1;
    }
    //si hay animales devolvemos la cantidad
    return longitud;
}

//creamos una funcion que verifica si una especie existe
int VerificarEspecie(char especie[6]){
    //si la especie coincide con el string que pongo ahi entonces devolvemos uno (true)
    if(strcmp(especie, "Perro") == 0 || strcmp(especie, "perro") == 0 || strcmp(especie, "Gato") == 0 || strcmp(especie, "gato") == 0 || strcmp(especie, "Loro") == 0 ||strcmp(especie, "loro") == 0){
        return 1;
    }else{
        //si no coincide ninguno devolvemos 0 (false) 
        return 0;
    }
};

//creamos una funcion para verificar si el nombre existe dentro de una especie
int VerificarNombre(char especie[6], char nombre[20]){
    int res = -1;
    //verificammos la longitud del array de animales (contamos cuantos animales hay)
    int longitud = VerificarLongitud();
    for(int i = 0; i < longitud; i++){
        //si la especie del animal en esa posicion coincide con la especie ingresada por el usuario entonces verificamos si su nombre tambien coincide
        if(strcmp(animal[i].especie, especie) == 0){
            if(strcmp(animal[i].nombre, nombre) == 0){
                //si coincide entonces devolvemos la posicion del animal ese
                res = i;
            }
        }
    }
    //si no coincide ninguno devolvemos -1 ya que esa no es una posicion valida
    return res;
};

//creamos una funcion para verificar si el sexo ingresado por el usuario existe
int VerificarSexo(char sexo[10]){
    //si el sexo ingresado coincide con alguno de los especificados...
    if(strcmp(sexo, "Masculino") == 0 || strcmp(sexo, "masculino") == 0 || strcmp(sexo, "Femenino") == 0 || strcmp(sexo, "femenino") == 0){
        //devolvemos 1 (true)
        return 1;
    }else{
        //si no coincide con ninguno devolvemos 0 (false)
        return 0;
    }
}


//creamos una funcion que pregunta al usuario si cxontinuar con el programa o si acabarlo
void Continuar(){
    printf("Desea hacer alguna otra operacion? \n(Escriba si o no)\n");
    scanf("%s", reinicio);
    //si la respuesta es si...
    if (strcmp(reinicio, "si") == 0){
        //igualamos menu a true
        menu = 1;
    }else{
        //de lo contrario igualamos menu a false
        menu = 0;
    }
}

//funcion paea añadir animales
void Insertar(char especie[6], char nombre[20]){
    //verificamos si existe la especie ingresada
    int existeEspecie = VerificarEspecie(especie);
    //si la especie es true (osea que devolvio 1)...
    if (existeEspecie == 1){
        //verificamos si existe el nombre dentro de esa especie
        int existeNombre = VerificarNombre(especie, nombre);
        //si la especie existe pero el nombre no entonces procedemos a crearlo
        if(existeNombre < 0){
            char sexo[10];
            printf("Ingrese el sexo de su animal: \n");
            scanf("%s", sexo);
            //verificamos si el sexo es valido
            int existeSexo = VerificarSexo(sexo);
            if(existeSexo == 0){
                printf("lo siento pero este sexo no existe \n");
                Menu();
            }else{
                int edad = 0;
                printf("Introduzca la edad de su animal: \n");
                scanf("%i", &edad);
                //verificamos la cantidad de animales para saber en quer posicion añadirlo
                int longitud = VerificarLongitud();
                //si la longitud es menor a 0 entonces añadimos el animal en la posicion 0
                if (longitud < 0){
                    strcpy(animal[0].especie, especie);
                    strcpy(animal[0].nombre, nombre);
                    strcpy(animal[0].sexo, sexo);
                    animal[0].edad = edad;
                //si la posicion no es menor a cero entonces añadimos el animal en la ultima posicion 
                //(si hay 10 animales comienza desde el 0 pero la funcion te dice que hay 10 asi que por eso ponemos en la ultima posicion y no en la ultima + 1)
                }else{
                    strcpy(animal[longitud].especie, especie);
                    strcpy(animal[longitud].nombre, nombre);
                    strcpy(animal[longitud].sexo, sexo);
                    animal[longitud].edad = edad;
                }
                printf("Animal añadido correctamente \n");
                //preguntamos si desea continuar con el programa o acabarlo
                Continuar();
            }
            //si el animal existe no podemos reescribirlo
        }else{
            printf("lo siento pero este animal ya existe \n");
            Menu();
        }
        //si la especie no existe no podemos continuar
    }else{
        printf("Lo siento pero esta especie no esta disponible \n");
        Menu();
    }
}

//funcion para que el usuario elija si seguir modificando al animal o acabar
void ModificarOtro(char especie[5], char nombre[20]){
    printf("Desea Hacer algun otro cambio? \n(escriba si o no) \n");
    scanf("%s", res);
    if (strcmp(res, "si") == 0){
        //si dice que si entonces
        Modificar(especie, nombre);  
    }else{
        //si dice que no le preguntamos si desea acabar o volver al menu principal
        Continuar();
    }
}

//funcion para modificar animales existentes
void Modificar(char especie[5], char nombre[20]){
    //verificamos que exista la especie
    int existeEspecie = VerificarEspecie(especie);
    if (existeEspecie == 1){
        //verificamos que exista el nombre dentro de esa especie
        int existeNombre = VerificarNombre(especie, nombre);
        if(existeNombre < 0){
            printf("lo siento pero este animal no existe \n");
            //en caso de que no exista volvemos a iniciar el menu
            Menu();
        }else{
            int eleccion;
            printf("que desea modificar del animal? \n0_cancelar \n1_nombre \n2_sexo \n3_edad \n 4_ver datos del animal \n");
            scanf("%i", &eleccion);
            switch (eleccion){
            case 0:
                break;

            case 1:
                printf("Que nombre desea ponerle? \n");
                scanf("%s", nombre);
                strcpy(animal[existeNombre].especie, animal[existeNombre].especie);
                strcpy(animal[existeNombre].nombre, nombre);
                strcpy(animal[existeNombre].sexo, animal[existeNombre].sexo);
                animal[existeNombre].edad = animal[existeEspecie].edad;
                printf("Modificacion realizada correctamente \n");
                ModificarOtro(animal[existeNombre].especie, animal[existeNombre].nombre);
                break;

            case 2:
                printf("Que sexo desea ponerle? \n");
                scanf("%s", sx);
                int existeSexo = VerificarSexo(sx);
                if(existeSexo == 0){
                    printf("lo siento pero este sexo no existe \n");
                    break;
                }else{
                    strcpy(animal[existeNombre].especie, animal[existeNombre].especie);
                    strcpy(animal[existeNombre].nombre, animal[existeNombre].nombre);
                    strcpy(animal[existeNombre].sexo, sx);
                    animal[existeNombre].edad = animal[existeEspecie].edad;
                    printf("Modificacion realizada correctamente \n");
                    ModificarOtro(animal[existeNombre].especie, animal[existeNombre].nombre);
                    break;
                }

            case 3:
                printf("Que edad desea ponerle? \n");
                scanf("%i", &edad);
                    strcpy(animal[existeNombre].especie, animal[existeNombre].especie);
                    strcpy(animal[existeNombre].nombre, animal[existeNombre].nombre);
                    strcpy(animal[existeNombre].sexo, animal[existeNombre].sexo);
                    animal[existeNombre].edad = edad;
                printf("Modificacion realizada correctamente \n");
                ModificarOtro(animal[existeNombre].especie, animal[existeNombre].nombre);
                break;
            case 4:
                printf("Especie: %s\n Nombre: %s\n Sexo: %s\n Edad: %i\n ", animal[existeNombre].especie, animal[existeNombre].nombre, animal[existeNombre].sexo, animal[existeNombre].edad);
                ModificarOtro(animal[existeNombre].especie, animal[existeNombre].nombre);
                break;
            default:
                printf("Por favor escriba una opcion valida \n");
                //en caso de que no exista volvemos a iniciar el menu
            Menu();
                break;
            }
        }
    }else{
        printf("Lo siento pero esta especie no esta disponible \n");
        //en caso de que no exista volvemos a iniciar el menu
        Menu();
    }
}

//Funcion que crea tres animales para poder modificarlos sin tener que crearlos manualmente
void crear(){
    strcpy(animal[0].especie, "Perro");
    strcpy(animal[0].nombre, "Juan");
    strcpy(animal[0].sexo, "Masculino");
    animal[0].edad = 3;

    
    strcpy(animal[1].especie, "Loro");
    strcpy(animal[1].nombre, "Pepe");
    strcpy(animal[1].sexo, "Masculino");
    animal[1].edad = 2;

    strcpy(animal[2].especie, "Perro");
    strcpy(animal[2].nombre, "Juana");
    strcpy(animal[2].sexo, "Femenino");
    animal[2].edad = 1;

    
    strcpy(animal[3].especie, "Gato");
    strcpy(animal[3].nombre, "Tom");
    strcpy(animal[3].sexo, "Masculino");
    animal[3].edad = 9;

    strcpy(animal[4].especie, "Gato");
    strcpy(animal[4].nombre, "Pedro");
    strcpy(animal[4].sexo, "Masculino");
    animal[4].edad = 2;

    
    strcpy(animal[5].especie, "Loro");
    strcpy(animal[5].nombre, "Carlos");
    strcpy(animal[5].sexo, "Masculino");
    animal[5].edad = 2;
}

void Eliminar(char especie[5], char nombre[20]){
    int existeEspecie = VerificarEspecie(especie);
    if (existeEspecie == 1){
        int existeNombre = VerificarNombre(especie, nombre);
        if(existeNombre < 0){
            printf("Lo siento pero este animal no existe");
            //en caso de que no exista volvemos a iniciar el menu
            Menu();
        }else{
            int longitud = VerificarLongitud();
            for(int i = existeNombre; i < longitud; i++){
                if(i == longitud){
                    strcpy(animal[i].especie, "");
                    strcpy(animal[i].nombre, "");
                    strcpy(animal[i].sexo, "");
                    animal[i].edad = -1;
                }else{
                    strcpy(animal[i].especie, animal[i + 1].especie);
                    strcpy(animal[i].nombre, animal[i + 1].nombre);
                    strcpy(animal[i].sexo, animal[i + 1].sexo);
                    animal[i].edad = animal[i + 1].edad;
                }
            }
            printf("Animal eliminado correctamente");
            Continuar();
        }
    }else{
        printf("Lo siento pero esta especie no existe");
        //en caso de que no exista volvemos a iniciar el menu
        Menu();
    }
};

void Ver(){
    int longitud = VerificarLongitud();
    for(int i = 0; i < longitud; i++){
        if(animal[i].edad > -1){
            printf("Animal nro: %i\n", i + 1);
            printf("Especie: %s \n", animal[i].especie);
            printf("Nombre: %s \n", animal[i].nombre);
            printf("Sexo: %s \n", animal[i].sexo);
            printf("Edad: %i \n", animal[i].edad);
            printf("\n\n");
        }
    }
    Continuar();
}

void VerCachorros(){
    int longitud = VerificarLongitud();
    for(int i = 0; i < longitud; i++){
        if(animal[i].edad <= 2 && animal[i].edad > -1){
            printf("Animal nro: %i\n", i + 1);
            printf("Especie: %s \n", animal[i].especie);
            printf("Nombre: %s \n", animal[i].nombre);
            printf("Sexo: %s \n", animal[i].sexo);
            printf("Edad: %i \n", animal[i].edad);
            printf("\n\n");
        }
    }
    Continuar();
}

//funcion que abre menu de opciones
void Menu(){
    int res;
    printf("Que operacion desea realizar? \n0_salir \n1_Insertar un animal \n2_Modificar un animal \n3_Eliminar un animal \n4_Ver los animales registrados \n5_Ver los cachorros registrador \n");
    scanf("%i", &res);
    switch (res){
        //en caso de querer salir le ponemos un break
    case 0:
        printf("Hasta la proxima\n");
        break;

    case 1:
        printf("Que especie de animal desea ingresar?\n");
        scanf("%s", especie);
        printf("Que nombre desea ingresarle al animal?\n");
        scanf("%s", nombre);
        Insertar(especie, nombre);
        break;

    case 2:
        printf("Que especie es el animal que desea modificar?\n");
        scanf("%s", especie);
        printf("Que nombre tiene el animal que desea modificar?\n");
        scanf("%s", nombre);
        Modificar(especie, nombre);
        break;

    case 3:
        printf("Que especie es el animal que desea eliminar?\n");
        scanf("%s", especie);
        printf("Que nombre tiene el animal que desea eliminar?\n");
        scanf("%s", nombre);
        Eliminar(especie, nombre);
        break;

    case 4:
        Ver();
        break;

    case 5:
        VerCachorros();
        break;

    default:
        printf("Escriba una opcion valida, ingrese solo el numero de la opcion a elegir\n");
        Menu();
        break;
    }
}

int main(void){
    //añadimos un par de animales para no tener que estar creandolos manualmente para hacer pruebas
    crear();
    //mientras que menu sea igual a true
    while(menu == 1){
        //igualamos menu a false 
        menu = 0;
        //iniciamos el menu
        Menu();
    }
    return 0;
}