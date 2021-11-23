const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github=github;
    }

    getHtmlEng() {
        return `<h2>Engineer</h2>
                <h2>${this.name}</h2>
                <h2>${this.id}</h2>
                <h2>${this.email}</h2>
                <h2>${this.github}</h2>
                `
    }
};

module.exports = Engineer;
