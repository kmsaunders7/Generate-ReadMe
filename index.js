//calling inquirer npm
const inquirer = require('inquirer');
//calling the filesystem
const fs = require('fs');
//importing utilities mode
const util = require('util')
//using promisify to convert callback based method to promised based method
const writeFileAsync = util.promisify(fs.writeFile);
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
        type: 'checkbox',
        name: 'license',
        message: 'Select License for your project:',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD 3', 'UNLICENSED'],
        
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
    
const template = (response) =>
    `# **${response.title}**
    
    ![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)
    \n
    ## DESCRIPTION:
    \n
    ${response.description}
    \n
    ## **TABLE OF CONTENTS**
    1. [INSTALLATION INSTRUCTIONS] (####Installation Instructions)
    2. [TEST INSTRUCTIONS] (####Test Instructions)
    3. [USAGE INFORMATION] (####Usage Information)
    4. [CONTRIBUTION GUIDELINES] (####Contribution Guidelines)
    5. [LICENSE] (####License)
    6. [QUESTIONS and CONTACT] (####Questions and Contact)
    \n
    ### **INSTALLATION INSTRUCTIONS**
    \n
    In order to properly install this project you will need to run ${response.install}.
    \n
    ### **TEST INSTRUCTIONS**
    \n
    In order to properly run a test you will need to put ${response.test} into your command line.
    \n
    ### **USAGE INFORMATION**
    \n
    Please note the following when using this project: ${response.usage}
    \n
    ### **CONTRIBUTION GUIDELINES**
    \n
    If contributing to this project please follow these guidelines: ${response.contribution}
    \n
    ### **LICENSE**
    \n
    This project is licensed under ${response.license} license.
    \n
    ### **QUESTIONS and CONTACT**
    \n
    Any questions regarding this project please contact me directly at ${response.email} or visit [${response.username}](https://github.com/${response.username}) 
    \n
    Project link 
    [${response.title}](https://${response.username}.github.io/${response.title}) 
    `

// using async...
  const init = async () => {
    console.log('Answer prompts to create README...');
    try {
      const response = await promptUser();
  
      const md = template(response);
  
      await writeFileAsync('README.md', md);
  
      console.log('Success!');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();