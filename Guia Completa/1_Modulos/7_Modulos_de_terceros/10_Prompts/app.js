const prompts = require("prompts");

//creamos un prompt
const response = await prompts({
      type: 'text',
      name: 'meaning',
      message: 'What is the meaning of life?'
});
  
console.log(response.meaning);

//generar varios prompts seguidos
const questions = [
    {
      type: 'text',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?'
    },
    {
      type: 'text',
      name: 'about',
      message: 'Tell something about yourself',
      initial: 'Why should I?'
    }
  ];

  const response2 = await prompts(questions);


//prompts dinamicos
const questions2 = [
    {
      type: 'text',
      name: 'dish',
      message: 'Do you like pizza?'
    },
    {
      type: prev => prev == 'pizza' ? 'text' : null,
      name: 'topping',
      message: 'Name a topping'
    }
  ];
  
const response3 = await prompts(questions2);

  
//callback
const onSubmit = (prompt, answer) => console.log(`Thanks I got ${answer} from ${prompt.name}`);
const response4 = await prompts(questions2, { onSubmit });

//