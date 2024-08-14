// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Buscar al usuario en la base de datos (simulada)
      const usuario = usersDB.find((user) => user.username === username);
  
      if (!usuario) {
        return res.status(401).json({ mensaje: 'Usuario no encontrado' });
      }
  
      // Verificar la contraseña utilizando bcrypt
      const passwordMatch = await bcrypt.compare(password, usuario.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
      }
  
      // Crear un nuevo token de acceso (opcional)
      const accessToken = jwt.sign(
        { username: usuario.username, rol: usuario.rol },
        secretKey,
        { expiresIn: accessTokenExpiration }
      );
  
      res.json({ mensaje: 'Inicio de sesión exitoso', accessToken });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  });
  