// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// example badge url to get badge from shields.io - https://img.shields.io/badge/License-Apache%20License%202.0-brightgreen
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  } else {
    return `https://img.shields.io/badge/License-${encodeURIComponent(
      license
    )}-brightgreen`;
  }
}

// function that generates markdown for README
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
License covering this application: ${answers.license}

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
