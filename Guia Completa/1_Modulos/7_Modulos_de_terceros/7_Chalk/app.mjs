import chalk from 'chalk';

//escribir en verde
console.log(chalk.green("Hola"));

// combinar colores
console.log(chalk.blue('Hello ') + chalk.red('World'));

//añadir tipo de letra bold
console.log(chalk.blue.bold('Anonymusahdow'));

//añadir tipo de letra italic
console.log(chalk.blue.italic('Anonymusahdow'));

//añadir un fondo
console.log(chalk.bgYellow('Hello world!'));
console.log(chalk.red.bgYellow('Hello world!'));

//enviar por separado
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

//subrayar
console.log(chalk.underline("Subrayado"));

//RGB
console.log(chalk.rgb(123, 45, 67)("Hola Nahuel"));

//Hexadecimal
console.log(chalk.hex('#ff00ff')("Texto violetita"));

//reestablecer 
console.log(chalk.reset('Anonymusahdow'));

//concatenar con estilo
const name = 'Sindre';
console.log(chalk.red('Hello %s'), name);

//tachar texto
console.log(chalk.strikethrough('Texto tachado'));

//añadir texto tenue
console.log(chalk.dim('Texto tenue'));


//ejemplo de uso
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));