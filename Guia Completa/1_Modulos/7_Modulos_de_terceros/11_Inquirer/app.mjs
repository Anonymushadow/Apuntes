import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Are you sure?'
  }
];


//mostrar las preguntas al usuario y esperar sus respuestas
inquirer.prompt(questions).then(answers => {
  console.log('Answers:', answers);
});


//crear un prompt personalizado
inquirer.registerPrompt('animal', require('inquirer-animal-prompt')); //importo el prompt y lo almaceno en "animal"

const questions2 = [
  {
    type: 'animal', //aca le doy uso al prompt
    name: 'favoriteAnimal',
    message: 'What is your favorite animal?'
  }
];

inquirer.prompt(questions2).then(answers => {
  console.log('Favorite Animal:', answers.favoriteAnimal);
});
