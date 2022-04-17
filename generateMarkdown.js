// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://img.shields.io/badge/License-Apache%20License%202.0-brightgreen
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# Project: ${answers.title}

![Project Licence](${renderLicenseBadge(answers.license)})
  
## Table of Contents
1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)
7. [Questions](#questions)

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
