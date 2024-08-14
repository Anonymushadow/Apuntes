const jwt = require('jsonwebtoken');

// Clave secreta para firmar los tokens (reemplaza esto con tu clave secreta real)
const secretKey = 'miClaveSecreta';

// Función para generar un nuevo accessToken
function generarAccessToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '15m' }); // accessToken válido por 15 minutos
}

// Función para generar un refreshToken
function generarRefreshToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '7d' }); // refreshToken válido por 7 días
}

// Middleware para verificar el accessToken
function verificarAccessToken(req, res, next) {
  // Obtener el token del encabezado de la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401); // No se proporcionó ningún token, acceso no autorizado
  }

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      return res.sendStatus(403); // El accessToken es inválido o ha caducado
    }

    req.user = payload; // Almacenar el usuario en la solicitud
    next();
  });
}

// Ruta para obtener un nuevo accessToken utilizando refreshToken
app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401); // No se proporcionó refreshToken
  }

  jwt.verify(refreshToken, secretKey, (err, payload) => {
    if (err) {
      return res.sendStatus(403); // El refreshToken es inválido o ha caducado
    }

    // Generar un nuevo accessToken utilizando los datos del usuario del refreshToken
    const nuevoAccessToken = generarAccessToken(payload);

    res.json({ accessToken: nuevoAccessToken });
  });
});

// Ruta protegida que requiere un accessToken válido
app.get('/protegido', verificarAccessToken, (req, res) => {
  res.json({ mensaje: 'Ruta protegida con éxito', usuario: req.user });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en funcionamiento en http://localhost:3000');
});