const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");


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
            message: "What is the manager's office number?",
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
          fs.writeFile("./dist/index.html", generateHTML(company), err =>
          err ? console.log(err) : console.log("You're all set! Your Team Profile has been created.")
        );
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
    
    inquirer
    .prompt ([
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
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
            name: "engineerId",
            message: "What is the engineer's ID?",
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
            name: "engineerEmail",
            message: "What is the engineer's email?",
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
            name: "github",
            message: "What is the engineer's github account?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          }
    ]).then(answers => { 
      const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
      company.push(newEngineer);
     
     createTeam();

    })
  };

  function addIntern() {
    console.log("Add intern information.");

    inquirer
    .prompt ([
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
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
            name: "internId",
            message: "What is the intern's ID?",
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
            name: "internEmail",
            message: "What is the intern's email?",
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
            name: "school",
            message: "What school did the intern attend?",
            validate: answer => {
              if (answer !== "") {
                  return true
              } else {
                return "Please enter a value."
              }
            }
          }
    ]).then(answers => { 
      const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
      company.push(newIntern);
     
     createTeam();

    })
    
  };


    createManager();
}
 // };


  
init();