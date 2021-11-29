

const createManager = function(manager) {
    return `
    <div class="col-3 mt-3">
     <div>
        <div class="card-header manager-card">
                <h4>${manager.name}</h4>
                <h6>Manager</h6><i class="material-icons">work</i>
        </div>
        <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
        </div>
  </div>
</div>    
    `
};


const createEngineer = function(engineer) {
    return `
    <div class="col-3 mt-3">
        <div>
            <div class="card-header engineer-card">
                <h4>${engineer.name}</h4>
                <h6>Engineer</h6><i class="material-icons">settings_input_antenna</i>
            </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
          </div>
    </div>    
    `
};


const createIntern = function(intern) {
    return `
    <div class="col-3 mt-3">
        <div>
            <div class="card-header intern-card">
                <h4>${intern.name}</h4>
                <h6>Intern</h6><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>    
    `
};


createHTML = (employeeinfo) => {


    myTeamArr = [];

    for(let i=0;i<employeeinfo.length;i++) {

        const employee=employeeinfo[i];

        const role=employee.getRole();

        if(role==="Manager") {
            const managerCard=createManager(employee);
            myTeamArr.push(managerCard);
        };

        if (role==="Engineer") {
            const engineerCard=createEngineer(employee);
            myTeamArr.push(engineerCard);
        };

        if(role==='Intern') {
            const internCard=createIntern(employee);
            myTeamArr.push(internCard);
        };
    };

    const employeeRoles=myTeamArr.join('');
    
    const createTeamProfiles=myTeam(employeeRoles);
    return createTeamProfiles;
};



const myTeam = function (employeeProfiles) {
    return `

 <!DOCTYPE html>

 <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="header-container">
            <nav class="title-container">
                <span class="title-header">My Team</span>
            </nav>
        </header>       
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeProfiles}
                </div>
            </div>
        </main>
    </body>
</html>
  `;
};



module.exports = createHTML;