const inquirer = require(`inquirer`);
const fs = require(`fs`)

inquirer
  .prompt([
    {
        type: `input`,
        name: `name`,
        message: `What is your application's name?`
    },
    {
        type: `input`,
        name: `description`,
        message: `Describe your application in one sentence.`
    },
    {
        type: `input`,
        name: `installation`,
        message: `What command should be run to install dependencies for your appliication?`
    },
    {
        type: `input`,
        name: `usage`,
        message: `Describe how to use your application.`
    },
    {
      type: `input`,
      name: `tests`,
      message: `What command should be run to run tests on your application?`
    },
    {
        type: `input`,
        name: `contributing`,
        message: `Tell people how you would like people to contribute to your application.`
    },
    {
        type: `input`,
        name: `questions`,
        message: `What is your github username?`
    },
    {
        type: `imput`,
        name: `email`,
        message: `What is your email?`
    },
    {
        type: `list`,
        name: `license`,
        message: `Choose a popular license from this list.`,
        choices: [`MIT`,`GNU`,`Apache`,`No License`],
        default: `No License`
    }
  ])
.then((answers) => {
    function selectLicense () {
        if (answers.license === `MIT`) {
            badge = `https://img.shields.io/badge/License-MIT-green`
            link = `https://www.mit.edu/~amini/LICENSE.md`
        } else if (answers.license === `Apache`) {
            badge = `https://img.shields.io/badge/License-Apache-blue`
            link = `https://www.apache.org/licenses/LICENSE-2.0`
        } else if (answers.license === `GNU`) {
            badge = `https://img.shields.io/badge/License-GNU-blueviolet`
            link = `https://www.gnu.org/licenses/gpl-3.0.en.html`
        } else {
            beadge = `https://img.shields.io/badge/License-none-lightgrey`
            link = `#`
        }
    }
  selectLicense()
  fs.writeFile(`${answers.name}.md`,
`
# ${answers.name}
![](${badge})

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Description <a id="Description"></a>
${answers.description}

## Installation <a id="Installation"></a>
In order to install the necessary dependencies, run this <code>${answers.installation}</code> command. 

## Usage <a id="Usage"></a>
${answers.usage}

## Contributing <a id="Contributing"></a>
${answers.contributing}

## Tests <a id="Tests"></a>
You can run tests by running this <code>${answers.tests}</code> command. 

## Questions <a id="Questions"></a>
Any questions can be directed to my [Github](https://Github.com/${answers.questions}) account.

I can also be reached at my email: [${answers.email}](${answers.email})

## License <a id="License"></a>
[${answers.license}](${link})
`
  , err => {
      if (err) {
        console.error(err);
      } else {
          console.log(`Success!`)
      }
    });
  }) 