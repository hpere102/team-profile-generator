const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/Manager");
let placeholder = {
  type: "",
  name: "",
  message: "",
  validate: answer => {
    if (answer !== "") {
        return true
    } else {
      return "Please enter a value."
    }
  }
}

const company = [];  

function init() {
  console.log("Ready to build your team?")

  function createManager() {
    console.log("Lets start off with your manager");
  inquirer
    .prompt ([
          {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          },
          {
            type: "input",
            name: "managerId",
            message: "What is the managers's ID?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          }
    ])
    .then(answers => { 
      const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
      company.push(newManager);
      createTeam();
    })
    .catch(err => {
      if(err) {
        console.log(err);
      } else {
        console.log("Whoops, something went wrong.")
      }
    })
  };

  function createTeam() {
    console.log("Build your team!");

    inquirer.prompt([
      {
          type: "list",
          name: "role",
          message: "Which team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I'm all finished up"
          ]
      }
    ]).then (choice => {
      switch (choice.role) {
        case "Engineer":
          addEngineer();
          break;
          case "Intern":
            addIntern();
            break;
         default:
           buildTeam();
      }

    })
    .catch(err => {
      if(err) {
        console.log(err);
      } else {
        console.log("Whoops, something went wrong.")
      }
    })

  };

  function addEngineer() {
    console.log("Add engineer information.");
    createTeam();
  };

  function addIntern() {
    console.log("Add intern information.");
    createTeam();
  };

  function buildTeam() {
    console.log("Building team...")
  };
  createManager();
}

init();

      
    
        

        
    

    
    
   /* promptCompany()
    .then(promptEmployee)
    .then(answers => {

      const {company, manager, managerId, email, office,} = answers;

  
      const companyEmployees = new Company(company);

      companyEmployees.addManager(manager, managerId, email, office);
      
      companyEmployees.addNewEmployee(role, employeeName, employeeId, employeeEmail, github, school);
      
      companyEmployees.addNewEmployee(role, employeeName, employeeId, employeeEmail, github, school);


      console.log(companyEmployees.getHtml());
      
         
 fs.writeFile("./README.md", template, err =>
    err ? console.log(err) : console.log('You are all set! Your README.md file has been created.')
  );
    
    
  })*/
  
    
    

   



