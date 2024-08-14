const jwt = require("jsonwebtoken");
const secretKey = "mi_clave_secreta";
const payload = { usuarioId: 123, nombre: "Ejemplo" };

//firmar un jwt
const token = jwt.sign(payload, secretKey);

//verificar un jwt
jwt.verify(token, secretKey, (error, decoded) => {
  if (error) {
    console.log("Invalido");
  } else {
    console.log("Valido");
  }
});

//decodificar los datos
const decoded = jwt.decode(token);

// Crear un nuevo token con una fecha de vencimiento extendida
const nuevoToken = jwt.sign(
  { ...decoded, exp: Math.floor(Date.now() / 1000) + 3600 },
  secretKey
);

//añadir un vencimienbto del token
const token3 = jwt.sign(
  {
    sub: "1234567890",
    name: "John Doe",
    iat: 1516239022, // Tiempo de emisión del token (indica el momento en que se emitió el token)
    exp: 1516239122, // Tiempo de vencimiento del token (Timestamp)
  },
  secretKey
);

//añadir reclamacion
const token4 = jwt.sign(
  {
    sub: "1234567890",
    name: "John Doe",
    isAdmin: true,
  },
  secretKey
);

//
const token5 = jwt.sign(
  {
    sub: "1234567890",
    name: "John Doe",
    aud: "app123",
  },
  secretKey
);

//
const token6 = jwt.sign(
  {
    sub: "1234567890",
    name: "John Doe",
    iss: "myapp.com",
  },
  secretKey
);

const token7 = jwt.sign(payload, secretKey, { algorithm: "HS256" });


