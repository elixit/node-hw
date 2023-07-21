// displays links for the github badge and username
function renderLicenseBadge(license) {
  if (license === "none") {
    return `(https://img.shields.io/badge/${license}/<Repository>-blue.svg)`;
  }
  return "";
}
function renderLicenseLink(license) {
  
    return `(https://img.shields.io/badge/${license}/<liscence>-blue.svg)`;
  }
  function renderLicenseLink(creator, license) {
  
    return `(https://img.shields.io/badge/${creator}/<${license}>-blue.svg)`;
  }



// generates the markdown for readme, data paramater appended with # to display user input

function generateMarkdown(data,) {
  return `# ${data.title} 
  ## liscence
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseLink(data.creator)}

## Description
${data.description}
## Deployed URL
${data.link}
## Screenshot
(${data.screenshot})
## Table of Contents
* [Features](#features)
* [Application](#ApplicationUse)
* [Creator](#creator)


## Features
${data.features}
## Languages & Dependencies
${data.require}
## ApplicationUse:
${data.usage}
## Creator
${data.creator}

`;
}

module.exports = generateMarkdown;
