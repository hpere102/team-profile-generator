const Employee = require('../lib/Employee')



function employeeTest () {

test('this will ensure the employee object works' , () => {
    let employeeCard = new Employee('Danny',233, 'danny@gmail.com');

    expect(employeeCard.name);
    expect(employeeCard.id).toEqual(expect.any(Number));
    expect(employeeCard.email);
    
});

};

employeeTest();