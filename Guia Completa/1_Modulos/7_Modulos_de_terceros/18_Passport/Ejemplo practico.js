const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Passport.js
passport.use(
  new LocalStrategy((username, password, done) => {
    //simulacion de datos en una base de datos
    const users = [
      { id: 1, username: "usuario1", password: "contraseña1" },
      { id: 2, username: "usuario2", password: "contraseña2" },
    ];

    //buscar en la base de datos si existe el usuario
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    //si existe el usuario ejecuta done con el usuario
    if (user) {
      return done(null, user);
    } else {
      //si no ejecuta donde con un mensaje
      return done(null, false, {
        message: "Nombre de usuario o contraseña incorrectos",
      });
    }
  })
);

//Se ejecuta después de que un usuario haya sido autenticado con éxito.
passport.serializeUser((user, done) => {
  const serializedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  done(null, serializedUser);
});

//Se ejecuta en cada solicitud posterior después de la autenticación inicial. 
passport.deserializeUser((id, done) => {
  //buscamos el usuario que coincida con el id enviado
  const user = users.find((u) => u.id === id);
  //devolvemos el usuario
  done(null, user);
});

// Configuración de Express.js para recibir formularios
app.use(bodyParser.urlencoded({ extended: false }));

//configuración que permite que express almacene sesiones de usuario
app.use( session({ 
  secret: "mi_secreto", //clave para firmar las cookies de sesión
  resave: false, 
    //resave true --> en cada solicitud se vuelve a sobreescribirl os datos de sesion
    //resolve false --> si no hubieron cambios no se actualizara la sesion
  saveUninitialized: false //controla si se debe o no almacenar sesiones para usuarios no autenticados o sesiones vacías
})); 

//inicializar passport
app.use(passport.initialize());

//permitir que se pueda obtener informacion de la sesion para poder verificar si uno esta autenticado
app.use(passport.session());

// Rutas de inicio de sesión
app.get("/login", (req, res) => {
  res.send(
    'Formulario de inicio de sesión:\n<form method="post" action="/login">\n  <input type="text" name="username" placeholder="Nombre de usuario"><br>\n  <input type="password" name="password" placeholder="Contraseña"><br>\n  <input type="submit" value="Iniciar sesión">\n</form>'
  );
});

app.post(
  "/login",
  //autenticamos con el metodo local 
  passport.authenticate("local", {
    //si sale bien redireccionamos al perfil
    successRedirect: "/perfil",
    //si no de nueuvo a login
    failureRedirect: "/login",
  })
);

//si estamos autenticados accedemos a la ruta, si no nos redirecciona a login
app.get("/perfil", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(
      `Bienvenido, ${req.user.username}! <a href="/logout">Cerrar sesión</a>`
    );
  } else {
    res.redirect("/login");
  }
});

//funcion para cerrar sesion
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
