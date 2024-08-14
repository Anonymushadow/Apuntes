const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

app.use(passport.initialize());

//configurar una estrategia de autenticación
passport.use(
  new LocalStrategy((username, password, done) => {
    // Aquí debes realizar la lógica de autenticación,
    // verificar las credenciales en tu base de datos, etc.
    // Luego, llamar a "done" con el resultado.
  })
);

//configurar una autenticacion lde estrategia local
passport.use(
  new LocalStrategy((username, password, done) => {
    // Aquí debes realizar la lógica de autenticación,
    // verificar las credenciales en tu base de datos, etc.
    // Luego, llamar a "done" con el resultado.
  })
);

//configurar una autenticacion de jwt
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
};

//obtener el token desde el Encabezado de Autorización
const jwtOptions2 = {
  jwtFromRequest: (req) => {
    const token = req.headers.authorization; // Extraer el token del encabezado de autorización
    return token ? token.replace('Bearer ', '') : null; // Quitar "Bearer " si está presente
  },
  secretOrKey: 'tu_clave_secreta',
};

//obtener el token de las cookies
const jwtOptions3 = {
  jwtFromRequest: (req) => {
    const token = req.cookies.jwt; // Extraer el token de una cookie llamada "jwt"
    return token;
  },
  secretOrKey: 'tu_clave_secreta',
};

//obtener el token desde un Parámetro de Consulta
const jwtOptions4 = {
  jwtFromRequest: (req) => {
    const token = req.query.token; // Extraer el token de un parámetro llamado "token"
    return token;
  },
  secretOrKey: 'tu_clave_secreta',
};

passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    // Aquí verificas el token y el payload (datos del usuario) asociado al token.
    // Si la verificación es exitosa, llamas a done(null, usuario), de lo contrario, done(error).
  })
);



//configurar una autenticacion de oAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: "tu_client_id",
      clientSecret: "tu_client_secret",
      callbackURL: "tu_callback_url",
    },
    (accessToken, refreshToken, profile, done) => {
      // Aquí verificas la autenticación OAuth y el perfil del usuario.
      // Si la verificación es exitosa, llamas a done(null, usuario), de lo contrario, done(error).
    }
  )
);

//configurar una autenticacion barrer strategy
passport.use(
  new BearerStrategy((token, done) => {
    // Aquí verificas el token de portador (Bearer Token) y autenticas al usuario.
    // Si la verificación es exitosa, llamas a done(null, usuario), de lo contrario, done(error).
  })
);

//autenticar una solicitud en una ruta específica
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//verificar si esta autenticado
app.get("/perfil", (req, res) => {
  if (req.isAuthenticated()) {
    // El usuario está autenticado, muestra la página de perfil.
    res.render("perfil");
  } else {
    // El usuario no está autenticado, redirige a la página de inicio de sesión.
    res.redirect("/login");
  }
});

//hacer loggin
passport.authenticate("local", (err, user, info) => {
  if (err) {
    return next(err);
  }
  if (!user) {
    return res.redirect("/login");
  }
  req.logIn(user, (err) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/perfil");
  });
})(req, res, next);

//cerrar sesion
app.get("/logout", (req, res) => {
  req.logout(); // Cerrar la sesión del usuario
  res.redirect("/"); // Redirigir a la página de inicio
});

//
passport.serializeUser((user, done) => {
  done(null, user.id); // Serializar el ID del usuario en la sesión
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user); // Deserializar al usuario a partir del ID almacenado en la sesión
  });
});

