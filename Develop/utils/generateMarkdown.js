// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if(!license) {
    return "";
  }
}
renderLicenseBadge()
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if(!license) {
    return "";
  }
}

renderLicenseLink()
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if(!license) {
    return "";
  }
}

renderLicenseSection()
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
This application is ${data.license} license.

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
}

module.exports = generateMarkdown;
