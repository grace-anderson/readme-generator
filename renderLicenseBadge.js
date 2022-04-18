// function to return a license badge based on which license is passed in
// If license selected is None or default None is unchanged, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  } else {
    return `https://img.shields.io/badge/License-${encodeURIComponent(
      license.replace("-", " ")
    )}-brightgreen`;
  }
}

module.exports = renderLicenseBadge;