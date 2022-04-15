// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# Project: ${answers.title}
  
## Table of Contents
* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)

## Project Description 
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered by ${answers.license} license.

## Contribution Guidelines
${answers.contribution}
  
## Test Instructions
${answers.test}

## Questions 
Contact the developer ${answers.name} at ${answers.email};

${answers.name}'s Github profile: TODO create url with github ${answers.github}
  `;
}

module.exports = generateMarkdown;
