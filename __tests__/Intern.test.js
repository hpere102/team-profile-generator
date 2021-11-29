const Intern = require('../lib/Intern')



function internTest () {

test('this will ensure the intern profile was created' , () => {
    let internCard = new Intern('Danny',233, 'danny@gmail.com',"FIU");

    expect(internCard.name);
    expect(internCard.id).toEqual(expect.any(Number));
    expect(internCard.email);
    expect(internCard.school);
    
});

};

internTest();