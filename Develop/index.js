// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(data.join (process.cwd(), "README.md"), generate(fileName) )
}
writeToFile(fileName, data);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
