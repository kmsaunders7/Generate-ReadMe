//calling inquirer npm
const inquirer = require('inquirer');
//calling the filesystem
const fs = require('fs');
​
//Questions that will be prompted in terminal...
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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
        
    },
    {
      type: 'input',
      name: 'install',
      message: 'Command to install dependency',
            
    },
    {
      type: 'input',
      name: 'test',
      message: 'Command to run tests',
        
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What does the user need to know about using this repository?',
        
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What does the user need to know about contributing to this repository?',
        
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