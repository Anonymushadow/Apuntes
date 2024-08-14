
// JWT original
const token = 'tu-token-original-aqui'; // Reemplaza con tu JWT existente
const secretKey = 'tu-clave-secreta-aqui'; // Reemplaza con tu clave secreta

// Decodificar el JWT original
const decodedToken = jwt.verify(token, secretKey);

// Modificar la fecha de expiración (por ejemplo, aumentarla en 1 hora)
const nuevaFechaExpiracion = Math.floor(Date.now() / 1000) + 3600; // 3600 segundos = 1 hora

// Crear un nuevo JWT con la nueva fecha de expiración
const nuevoToken = jwt.sign({ ...decodedToken, exp: nuevaFechaExpiracion }, secretKey);

// Ahora `nuevoToken` contiene el JWT con la fecha de expiración modificada
console.log(nuevoToken);