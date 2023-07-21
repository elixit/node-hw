// packages required for application
const inquirer = require("inquirer");
const path = require("node:path");
const generateMarkdown = require("./gm/generateMarkdown");
fs = require('fs');
const process = require('process');


// read.me questions

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your Project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Enter the liscence you're using.",
    choices: ["none",  "MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3"],
  },

  {
    type: "input",
    name: "description",
    message: "Enter a description for the project.",
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter a link for the screenshot of the deployed application."
  },
  
  {
    type: "input",
    name: "features",
    message: "Enter any features you'd like to mention about the project",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage for this project.",
  },
  
  {
    type: "input",
    name: "creator",
    message: "Enter your github username",
   
  },
 
];

// function allows user to write to the read.me

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); // returns current directory for node
}

// function prompts the questions to the user, when an answer is given, they are written to 'rm'. generate markdown structures the content of the read.me, and the answers are spread with ... and generated with 'gen(answers)'
function genAnswers() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./rm/README.md", generateMarkdown({ ...answers }));
    console.log ('read.me created')
  });
}
genAnswers();

