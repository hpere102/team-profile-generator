const Manager = require('../lib/Manager')


function managerTest () {

test('this will ensure the managers profile was created' , () => {
    let managerCard = new Manager('Danny',233, 'danny@gmail.com',2334);
    
    expect(managerCard.name);
    expect(managerCard.id).toEqual(expect.any(Number));
    expect(managerCard.email);
    expect(managerCard.officeNumber).toEqual(expect.any(Number));
});

};

managerTest();