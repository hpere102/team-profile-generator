

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

    addEmployee(type, name, id, email, data) {
        switch(type) {
            case "manager":
                return this.addManager(name, id, email, data);
            case "engineer":
                return this.addEngineer(name, id, email, data);
            case "intern":
                return this.addIntern(name, id, email, data);   
            default:
                throw Error("Employee type not supported")  ;                    
        }
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
}

const company = new Company("Apple");

company.addManager("Hector Perez", "3425634", "hector@emaol.com", "332");

company.addEngineer("Hector Perez", "3425634", "hector@emaol.com", "332");

company.addIntern("Hector Perez", "3425634", "hector@emaol.com", "332");

console.log(company.getHtml());