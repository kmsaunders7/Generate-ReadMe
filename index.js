const inquirer = require('inquirer');
const fs = require('fs');
​
inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      
    },
    {
      type: 'input',
      name: 'project-name',
      message: 'What is the name of your Project?',
      
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
        
        },
    {
        type: 'list',
        name: 'license',
        message: 'Select License for your project:',
        choices: ['']
        
        },
  ])
  .then((answers) => {
​
    console.log(answers)
    

​
    fs.writeFile('ReadMe.md', html, function(err){
        if (err) throw err;
        console.log('Saved!');
    })
​
  });