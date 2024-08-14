const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Simulación de una base de datos de usuarios
const usersDB = [];

// Clave secreta para firmar y verificar tokens JWT
const secretKey = 'tu_clave_secreta';

// Tiempo de expiración del token de acceso (15 minutos)
const accessTokenExpiration = '15m';

// Tiempo de expiración del token de refresh (7 días)
const refreshTokenExpiration = '7d';

// Ruta de registro de usuarios
app.post('/registro', async (req, res) => {
  try {
    const { username, password, rol } = req.body;

    // Verificar si el usuario ya existe en la base de datos (simulada)
    const usuarioExistente = usersDB.find((user) => user.username === username);

    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear un nuevo usuario en la base de datos (simulada)
    const newUser = {
      username,
      password: hashedPassword,
      rol,
    };
    usersDB.push(newUser);

    // Crear token de acceso
    const accessToken = jwt.sign(
      { username: newUser.username, rol: newUser.rol },
      secretKey,
      { expiresIn: accessTokenExpiration }
    );

    // Crear token de refresh
    const refreshToken = jwt.sign(
      { username: newUser.username, rol: newUser.rol },
      secretKey,
      { expiresIn: refreshTokenExpiration }
    );

    res.json({ mensaje: 'Usuario registrado', accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en http://localhost:3000');
});
