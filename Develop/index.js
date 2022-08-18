// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your applications title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a description about your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Why is this project used for?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license would you like to choose for this project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors for this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Is your project a test?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>
fs.writeFileSync('README.md', generateMarkdown(fileName, data));
writeToFile(fileName, data);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
