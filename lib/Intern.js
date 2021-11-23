const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school=school;
    }

    getHtmlInt() {
        return `<h2>Intern</h2>
                <h2>${this.name}</h2>
                <h2>${this.id}</h2>
                <h2>${this.email}</h2>
                <h2>${this.school}</h2>
                `
    }
};

module.exports = Intern;
