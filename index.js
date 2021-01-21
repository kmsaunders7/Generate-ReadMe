//calling inquirer npm
const inquirer = require('inquirer');
//calling the filesystem
const fs = require('fs');
//importing utilities mode
const util = require('util')
//using promisify to convert callback based method to promised based method
const writeFileAsync = util.promisify(fs.writeFile);
​
//Questions that will be prompted in terminal...
const promptUser = () =>
  inquirer.prompt([
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
      name: 'title',
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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
        
    },
    {
      type: 'input',
      name: 'install',
      message: 'Command to install dependency',
      default: function() {
        return 'npm i'
      },
            
    },
    {
      type: 'input',
      name: 'test',
      message: 'Command to run tests',
      default: function () {
        return 'npm test'
        },
        
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using this repository?',
        
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What does the user need to know about contributing to this repository?',
        
    },

    ])
    


  promptUser()
  .then((response) => writeFileAsync('README.md', template(response)))
  .then(() => console.log('Success!'))
  .catch((err) => console.error(err));