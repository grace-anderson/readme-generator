// function to return a license badge based on which license is passed in
// If license selected is None or default None is unchanged, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  } else {
    return `https://img.shields.io/badge/License-${
      encodeURIComponent(license.replace('-', ' '))
    }-brightgreen`;
  }
}

// function to return licence URL from Open Source Initiative (OSI) https://opensource.org/
// clicking on badge opens license's OSI web page or other relevant web page
let licenseRequestUrl = ``;

function renderLicenseOpenSourceUrl(license) {
  if (license === "None") {
    licenseRequestUrl = `https://choosealicense.com/no-permission/`;
    return licenseRequestUrl;
  } else if (license === `Creative Commons Zero v1.0 Universal`) {
    licenseRequestUrl = `https://creativecommons.org/publicdomain/zero/1.0`;
    return licenseRequestUrl;
  } else {
    return getLicenseOpenSourceUrl(license);
  }
}

//create license Url
const getLicenseOpenSourceUrl = function (license) {
  let licenseUrl = getLicenceCodeForUrl(license);
  licenseRequestUrl = `https://opensource.org/licenses/${licenseUrl}`;
  return licenseRequestUrl;
};

//switch to get code for selected licencec
const getLicenceCodeForUrl = function (license) {
  switch (license) {
    case `Apache License 2.0`:
      return `Apache-2.0`;
    case `BSD 2-Clause`:
      return `BSD-2-Clause`;
    case `BSD 3-Clause`:
      return `BSD-3-Clause`;
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

// function to ensure name has first letters capitalised
function capitaliseName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// function that generates markdown for README
function generateMarkdown(answers) {
  return `# Project: ${answers.title}


[![](${renderLicenseBadge(answers.license)})](${renderLicenseOpenSourceUrl(
    answers.license
  )})


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
License covering this application: [${
    answers.license
  }](${renderLicenseOpenSourceUrl(answers.license)})

## Contribution Guidelines
${answers.contribution}
  
## Test Instructions
${answers.test}

## Questions 
Contact the author, ${capitaliseName(answers.name)}, at ${answers.email}

See more of my work on [GitHub](https://github.com/${answers.github})

  `;
}

module.exports = generateMarkdown;
