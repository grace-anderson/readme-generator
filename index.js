//Include packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
//Require local module to generate markdown file
const generateMarkdown = require("./generateMarkdown");

//array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your name? (Required)`,
      validate: requiredQuestions("Your name is required"),
    },
    {
      type: "input",
      name: "github",
      message: `What is your Github username? (Required)`,
      validate: requiredQuestions("Your Github username is required"),
    },
    {
      type: "input",
      name: "email",
      message: `What is your email? (Valid email required)`,
      validate: (emailInput) => {
        const validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailInput) {
          if (emailInput.match(validRegex)) {
            return true;
          } else {
            console.log(`: ${emailInput} is an invalid email address!`);
            return false;
          }
        } else {
          console.log("Your email address is required");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: `What is your project's title? (Required)`,
      validate: requiredQuestions("Your project title is required"),
    },
    {
      type: "input",
      name: "description",
      message: `Briefly describe your project (Required)`,
      validate: requiredQuestions("Your project description is required"),
    },
    {
      type: "editor",
      name: "installation",
      message: `Write your installation instructions`,
    },
    {
      type: "editor",
      name: "usage",
      message: `Add your usage information`,
    },
    //TODO - how to get github's list of licences (see github "choose licence template")
    // get by starting a repo and clicking on the button under "Choose a licence" (copied into index.html file)
    //TODO - how to get the licence badges and links? Manually add, use npm package?
    // github repo with links and badges https://gist.github.com/benkostr/fc3cd3760066db62598c9beefc259496
    // also npm package, no badges https://www.npmjs.com/package/spdx-license-data
    // use the shield.io api? https://shields.io/category/downloads -> added to github account - Shields.io
    {
      type: "list",
      message: "Select a licence for your project",
      name: "license",
      choices: [
        `None`,
        `Apache License 2.0`,
        `GNU General Public License v3.0`,
        `MIT`,
        `BSD 2 Clause`,
        `BSD 3 Clause`,
        `Boost Software License 1.0`,
        `Creative Commons Zero v1.0 Universal`,
        `Eclipse Public License 2.0`,
        "GNU Affero General Public License v3.0",
        `GNU General Public License v2.0`,
        `GNU Lesser General Public License v2.1`,
        `Mozilla Public License 2.0`,
        `The Unlicense`,
      ],
    },
    {
      type: "editor",
      name: "contribution",
      message: `Describe your contribution guidelines`,
    },
    {
      type: "editor",
      name: "test",
      message: `Add your test instructions`,
    },
  ]);
};

// initialize app, then use user input to write readme file
const init = () => {
  questions()
    .then((answers) => fs.writeFileSync(`README.md`, generateMarkdown(answers)))
    .then(() => console.log("Successfully created README.md"))
    .catch((err) => console.error(err));
};

//validate user input entered in questions
function requiredQuestions(errorMessage) {
  return (userInput) => {
    if (userInput) {
      return true;
    } else {
      console.log(errorMessage);
      return false;
    }
  };
}

// kick off (initialize) app
init();
