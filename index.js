const inquirer = require('inquirer');
const fs = require('fs');


class Employee {

    constructor(name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getHtml() {
        return `<h1> ${this.name}</h1>`;
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }

    getHtml() {
        return `<h1>${this.name}</h1>`;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github=github;
    }

    getHtml() {
        return `<h1>${this.name}</h1>`;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school=school;
    }

    getHtml() {
        return `<h1>${this.name}${this.school}</h1>`;
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

const promptCompany = () => {

    return inquirer.prompt([
        {
          type: 'input',
          name: 'company',
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
            name: 'managerId',
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
       
      ])
    };

    const promptEmployee = companyData => {

        if (!companyData.employees) {
            companyData.employees = [];
        }

        console.log(`
        =================
        Add a New Employee
        =================
        `);

        return inquirer.prompt([
            {
              type: 'list',
              name: 'role',
              message: 'Please choose the type of employee to add?',
              choices: ['Engineer', 'Intern']
            },
            {
              type: 'input',
              name: 'employeeName',
              message: 'What is the employees name?',
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a valid name!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'employeeId',
              message: 'Provide an employee ID.',
              validate: employeeIdInput => {
                if (employeeIdInput) {
                  return true;
                } else {
                  console.log('Please enter a valid ID!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'employeeEmail',
              message: 'Provide the employees email address.',
              validate: employeeEmailInput => {
                if (employeeEmailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Provide the employees github account if applicable.',
              },
              {
                type: 'input',
                name: 'school',
                message: 'Provide the employees school if applicable.',
              },
              {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false   
              }
          ])
          .then(employeeData => {
              companyData.employees.push(employeeData);
              if (employeeData.confirmAddEmployee) {
                  return promptEmployee(companyData);
              } else {
                  return companyData;
              }
          })
    }



      
    
        

        
    

    
    
    promptCompany()
    .then(promptEmployee)
    .then(answers => {

        const {company, manager, managerId, email, office, newEmployee, role, employeeName, employeeId, employeeEmail, github, school } = answers;
    
        const companyEmployees = new Company("Apple");

        companyEmployees.addManager(manager, managerId, email, office);
        
        companyEmployees.addEngineer("Hector Perez", "3425634", "hector@emaol.com", "332");
        
        companyEmployees.addIntern("Hector Perez", "3425634", "hector@emaol.com", "332");
        
        console.log(companyEmployees.getHtml()); 
        
           
   /* fs.writeFile("./README.md", template, err =>
      err ? console.log(err) : console.log('You are all set! Your README.md file has been created.')
    );*/
      
      
    })
    

   



