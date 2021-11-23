const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber=officeNumber;
    }

    getHtmlMan() {
        return `<h2>Manager</h2>
                <h2>${this.name}</h2>
                <h2>${this.id}</h2>
                <h2>${this.email}</h2>
                <h2>${this.officeNumber}</h2>
                `
    }
};

module.exports = Manager;

