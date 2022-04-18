 // function to return licence URL from Open Source Initiative (OSI) https://opensource.org/
  // clicking on badge opens license's OSI web page or another relevant web page
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

  module.exports = renderLicenseOpenSourceUrl;
