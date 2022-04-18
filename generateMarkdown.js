//Require local modules
const renderLicenseBadge = require("./renderLicenseBadge");
const renderLicenseOpenSourceUrl = require("./renderLicenseOpenSourceUrl");
const capitaliseName = require("./capitaliseName");

// function that generates markdown for README
const generateMarkdown = ({
  name,
  github,
  email,
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  test,
}) =>
  `
# Project: ${title}


[![](${renderLicenseBadge(license)})](${renderLicenseOpenSourceUrl(license)})


## Table of Contents
1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)
7. [Questions](#questions)

## Project Description 
${description}

## Installation
${installation}

## Usage
${usage}

## License
License covering this application: [${license}](${renderLicenseOpenSourceUrl(
    license
  )})

## Contribution Guidelines
${contribution}
  
## Test Instructions
${test}

## Questions 

If you have questions about the ${title} project, feel free to [email](mailto:${email}) the author, ${capitaliseName(
    name
  )}.

See more of ${capitaliseName(
    name
  )}'s work on [GitHub](https://github.com/${github})

  `;

module.exports = generateMarkdown;
