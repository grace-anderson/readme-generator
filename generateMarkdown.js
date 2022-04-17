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

// function to return licence URL from Open Source Initiative (OSI) https://opensource.org/
function renderLicenseOpenSourceUrl(license) {
  if (license === "None") {
    return ``;
  } else {
    getLicenseOpenSourceUrl(license);
  }
}

//create license Url
const getLicenseOpenSourceUrl = function (license) {
  const licenseRequestUrl = ``;

  if (license === `Creative Commons Zero v1.0 Universal`) {
    licenseRequestUrl = `https://creativecommons.org/publicdomain/zero/1.0`;
    return licenseRequestUrl;
  } else {
    const licenseUrl = getLicenceCodeForUrl(license);

    licenseRequestUrl = `https://api.opensource.org/license/${licenseUrl}`;

    return licenseRequestUrl;
  }
};

//switch to get code for selected licence
const getLicenceCodeForUrl = function (licence) {
  switch (licence) {
    case `Apache License 2.0`:
      return `Apache-2.0`;
    case `BSD 2 Clause`:
      return `BSD-2`;
    case `BSD 3 Clause`:
      return `Boost Software License 1.0`;
    case `Boost Software License 1.0`:
      return "BSL-1.0";
    case `Eclipse Public License 2.0`:
      return `EPL-2.0`;
    case `GNU Affero General Public License v3.0`:
      return `AGPL-3.0`;
    case `GNU General Public License v2.0`:
      return `GPL-2.0`;
    case `GNU General Public License v3.0`:
      return `GPL-3.0`;
    case `GNU Lesser General Public License v2.1`:
      return `LGPL-2.1`;
    case `MIT`:
      return `MIT`;
    case `Mozilla Public License 2.0`:
      return `MPL-2.0`;
    case `The Unlicense`:
      return `unlicense`;
    default:
      return ``;
  }
};

// function that generates markdown for README
function generateMarkdown(answers) {
  return `# Project: ${answers.title}

[![Project Licence](${renderLicenseBadge(
    answers.license
  )})](${renderLicenseOpenSourceUrl(answers.license)})
  
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
