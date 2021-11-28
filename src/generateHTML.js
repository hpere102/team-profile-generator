const generateManager= function(manager) {
    return `
    <div class="col-4 mt-4">
        <div>
            <div class="card-header manager-card">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">work</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>    
    `;
};


const generateEngineer=function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div>
            <div class="card-header engineer-card">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">settings_input_antenna</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>    
    `;
};


const generateIntern=function(intern) {
    return `
    <div class="col-4 mt-4">
        <div>
            <div class="card-header intern-card">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>    
    `;
};


generateHTML=(data)=> {
    pageArray=[];

    for(let i=0;i<data.length;i++) {
        const employee=data[i];
        const role=employee.getRole();

        if(role==="Manager") {
            const managerCard=generateManager(employee);
            pageArray.push(managerCard);
        };

        if (role==="Engineer") {
            const engineerCard=generateEngineer(employee);
            pageArray.push(engineerCard);
        };

        if(role==='Intern') {
            const internCard=generateIntern(employee);
            pageArray.push(internCard);
        };
    };

    const employeeRoles=pageArray.join('');
    const createTeamProfiles=generatePage(employeeRoles);
    return createTeamProfiles;
};


const generatePage=function (employeeProfiles) {
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

module.exports=generateHTML;