const globby = require("globby");

//busqueda de ejemplo
const busquecaSimple = async () => {
  try {
    const archivos = await globby(['**/*.js', '!node_modules'], {
      cwd: __dirname, // Establece el directorio de trabajo actual
      absolute: true, // Devuelve rutas absolutas
    });

    console.log('Archivos encontrados:');
    archivos.forEach((archivo) => {
      console.log(archivo);
    });
  } catch (error) {
    console.error('Error al buscar archivos:', error);
  }
};


//ignorar el directorio "node_modules" y "dist" al buscar
const archivos = await globby('**/*.js', {
    ignore: ['node_modules', 'dist']
  });

//incluir directorios y archivos ocultos
const archivos2 = await globby('**/*', {
    dot: true,
  });
  

//buscar solo directorios
const archivos3 = await globby('**/*', {
    onlyFiles: true, // Solo directorios
  });

//buscar solo archivos
const archivos4 = await globby('**/*', {
    onlyDirectories: true, // Solo archivos
  });

//buscar dentro de la carpeta "images" los archivos llamados cat.png, unicorn.png y los jpg
const bucarEnImages = async () => {
    const paths = await globby('images', {
      expandDirectories: {
        files: ['cat', 'unicorn', '*.jpg'],
        extensions: ['png']
      }
    });
  
    console.log(paths);
    //=> ['cat.png', 'unicorn.png', 'cow.jpg', 'rainbow.jpg']
  }


//mostrar por pantalla cada archivo .tmp que obtiene
const stream = async () => {
	for await (const path of globbyStream('*.tmp')) {
		console.log(path);
	}
}

//verificar si un archivo esta en el archivo .gitIgnore
const isIgnored = await isGitIgnored();

console.log(isIgnored('some/file'));

  
//buscar todos los archivos menos los acabados en "a"
const busqueda = async () => {
  const archivosExcluyendoTerminadosEnA = await globby(['**/*', '!**/*a']);
  console.log(archivosExcluyendoTerminadosEnA);
}
  

