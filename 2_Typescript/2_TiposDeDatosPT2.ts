//Errores
function mostrarError(message: string): never{
    throw new Error(message);
}