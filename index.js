const inquirer = require('inquirer');
const fs = require('fs');


class Employee {

    constructor(name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}</h1>`;
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am the Manager!</h1>`;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github=github;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an engineer, my github is ${this.github}!</h1>`;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school=school;
    }

    getHtml() {
        return `<h1>Hi there my name is ${this.name}, and I am an intern from${this.school}!</h1>`;
    }
}

class Company {
    constructor(name) {
        this.name=name;
        this.team=[];
    }

    addManager(name, id, email, officeNumber) {
        this.team.push(new Manager(name, id, email, officeNumber));
    }

    addEngineer(name, id, email, github) {
        this.team.push(new Engineer(name, id, email, github));
    }

    addIntern(name, id, email, school) {
        this.team.push(new Intern(name, id, email, school));
    }


    getHtml() {

        let teamHTML="";
        this.team.forEach(employee=> {
            teamHTML+=employee.getHtml();
        });

        return `
        <h1>Company</h1>
        
        <div>
        ${teamHTML}
        </div>
        
        `
    }
};

const promptCompany = companyInfo => {

    inquirer.prompt([
        {
          type: 'input',
          name: 'company-name',
          message: 'What is the company name?',
          validate: companyNameInput => {
            if (companyNameInput) {
              return true;
            } else {
              console.log('Please enter a company name.');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'manager',
          message: 'Please enter the team managers name?',
          validate: managerInput => {
            if (managerInput) {
              return true;
            } else {
              console.log('Please enter a name.');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'manager-id',
            message: 'Provide the team managers ID?',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter a valid ID.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter the team managers email address.',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter a valid email address.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'office',
            message: 'Please enter the team managers office number.',
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log('Please enter an office number.');
                return false;
              }
            }
          },
          
        {
          type: 'list',
          name: 'employee-type',
          message: 'Would you like to add more employees to the company or are you finished building your team?.',
          choices: ['Add Engineer',  'Add Intern' , 'Im finished'],
          validate: choices=> {
              if(choices === 'Add Enginner') {
                  engineerPrompt();
              }
          }
          
        },
       
      ])

      const engineerPrompt = engineerInfo => {

        inquirer.prompt([
            {
              type: 'input',
              name: 'company-name',
              message: 'What is the company name?',
              validate: companyNameInput => {
                if (companyNameInput) {
                  return true;
                } else {
                  console.log('Please enter a company name.');
                  return false;
                }
              }
            },

        ])
    

      .then(answers => {

        const {title, description, installation, usage, contributing, tests, license, username, email} = answers;
    
        const template=`# ${title}
    
           
    
    
    
    ## Description
    ${description}
            
    ## Table of Contents
    * [Description](#Description) <br>
    * [Table of Contents](#Table-of-Contents) <br>
    * [Installation](#Installation) <br>
    * [Usage](#Usage) <br>
    * [Tests](#Tests) <br>
    * [Licenses](#Licenses) <br>
    * [Questions](#Questions) 
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Contributing
    ${contributing}
    
    ## Tests
    ${tests}
    
    ### Licenses
    ![badge](https://img.shields.io/badge/license-${license}-brightgreen) <br>
    This project was created under the ${license} license.
    
    ### Questions
    Contact me:
    
    [Github](https://www.github.com/${username}) <br>
    [Email](mailto:${email})
            
            
            `
        
           
    fs.writeFile("./README.md", template, err =>
      err ? console.log(err) : console.log('You are all set! Your README.md file has been created.')
    );
      
      
    })
    };
}
    
    
    promptCompany();




/*const company = new Company("Apple");

company.addManager("Hector Perez", "3425634", "hector@emaol.com", "332");

company.addEngineer("Hector Perez", "3425634", "hector@emaol.com", "332");

company.addIntern("Hector Perez", "3425634", "hector@emaol.com", "332");

console.log(company.getHtml()); */ 