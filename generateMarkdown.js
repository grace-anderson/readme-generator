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
function generateMarkdown(data) {
  return `
  
  # Project: ${data.title}
  
  ## Table of Contents
  * [Project Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  ## Project Description 
  ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
  This application is covered by ${data.license} license.

  ## Contribution Guidelines
  ${data.contribution}
  
  ## Test Instructions
  ${data.test}

  ## Questions 
  Contact the developer ${data.name} at ${data.email};

  ${data.name}'s Github profile: TODO create url with github ${data.username}
  `;
}

module.exports = generateMarkdown;
