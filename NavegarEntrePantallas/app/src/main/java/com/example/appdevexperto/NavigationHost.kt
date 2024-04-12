package com.example.appdevexperto

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.appdevexperto.Destinations.*

@Composable
fun NavigationHost(){
    var navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = Pantalla1.route
    ){
        //aca definimos las diferentes pantyallas
        composable(Pantalla1.route){//abre esta pantalla
            Pantalla1(//inicia esta funcion dentro de esa pantalla
                navegarPantalla2 = {newText -> //reemplaza el it por newText
                    navController.navigate(Pantalla2.createRoute(newText))
                }
            )
        }
        composable(
            Pantalla2.route,
            arguments = listOf(navArgument("newText"){defaultValue = "Pantalla2"})
        ){ navBackStackEntry ->
            var newText = navBackStackEntry.arguments?.getString("newText")
            requireNotNull(newText)
            Pantalla2(newText)
        }
    }
}