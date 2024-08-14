const bcrypt = require('bcrypt');
const saltRounds = 10; // Número de rondas de sal (recomendado)

const password = 'mi_contraseña_secreta';

//crear un hash
const hashedPassword = bcrypt.hashSync(password, saltRounds);
console.log('Contraseña hash:', hashedPassword);

//verificar si una clave concide con el hash almacenado
const storedHashedPassword = 'hash_guardado_previamente'; // Hash almacenado en la base de datos
const isMatch = bcrypt.compareSync(password, storedHashedPassword);
if (isMatch) {
  console.log('Contraseña válida');
} else {
  console.log('Contraseña incorrecta');
}


//generar un salt aleatorio
const salt = bcrypt.genSaltSync(saltRounds);
const hashedPasswordWithsalt = bcrypt.hashSync(password, salt);

console.log('Sal utilizada:', salt);
console.log('Contraseña hash:', hashedPasswordWithsalt);

