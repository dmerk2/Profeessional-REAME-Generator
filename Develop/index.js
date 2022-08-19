// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your applications title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description about your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project used for?",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to choose for this project?",
      // Create choices of which license to use
      choices: [
        // https://www.gnu.org/licenses/agpl-3.0.en.html
        "GNU Affero General Public License v3.0",
        // https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
        "GNU General Public License v2.0",
        // https://www.gnu.org/licenses/gpl-3.0.en.html
        "GNU General Public License v3.0",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors for this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Is your project a test?",
      defualt: "N",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((data) => fs.writeFileSync("README.md", generateMarkdown(data)))
    // If it was successful console log Successfully wrote to README.md
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error("error", err));
};

// Function call to initialize app
init();
