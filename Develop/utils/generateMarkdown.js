// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const renderLicenseBadge = (license) => {
//   if (license === "GNU-Affero-General-Public-License-v3.0") {
//     return src = "https://raster.shields.io/badge/GNU--Affero--General--Public--License--v3.0-green";
//   } else if (license === "GNU General Public License v2.0") {
//     return src = "https://raster.shields.io/badge/-GNU%20General%20Public%20License%20v2.0-blue";
//   } else if (license === "GNU General Public License v3.0") {
//     return src = "https://raster.shields.io/badge/-GNU%20General%20Public%20License%3.0-orange";
//   } else {
//     return '';
//   }
// };
// renderLicenseBadge(license);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = (license) => {
//   if (!license) {
//     return "";
//   }
// };

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `<h1>${data.title}</h1>

## Description
${data.description}

## Table of Contents
 - [Description](#description)<br>
 - [Installation](#installation)<br>
 - [Usage](#installation)<br>
 - [License](#installation)<br>
 - [Contributing](#installation)<br>
 - [Tests](#installation)<br>
 - [Questions](#questions)<br>

## Installation
Installation instructions:
${data.installation}

## Usage
${data.usage}

## License
This application is using ${data.license}<br>
![License](https://www.gnu.org/licenses/agpl-3.0.en.html)<br>
![Badge](https://img.shields.io/badge/{GNU--Affero--General--Public--License--v3.0-green})

## Contributing
${data.contributing} contributed to this project.

## Tests
${data.tests}

## Questions
Have any questions?<br>
Check me out on GitHub! [${data.username}](https://github.com/${data.username})<br>
Shoot me an email at ${data.email}<br>
Generated with [README-generator](https://github.com/dmerk2/Professional-README-Generator)
`;
};

module.exports = generateMarkdown;
