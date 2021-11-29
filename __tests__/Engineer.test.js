const Engineer = require('../lib/Engineer')



function engineerTest () {

test('this will ensure the engineer profile was created' , () => {
    let engineerCard = new Engineer('Danny',233, 'danny@gmail.com',"dannygithub123");

    expect(engineerCard.name);
    expect(engineerCard.id).toEqual(expect.any(Number));
    expect(engineerCard.email);
    expect(engineerCard.github);
});


};

engineerTest();