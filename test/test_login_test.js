Feature('test_login');


Scenario('test_login', ({ I }) => {
    I.amOnPage("/");
    I.click('//html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[4]/ul[1]/li[9]/i[1]');
    I.seeElement('.modal-content')
    I.fillField('#sign-in-email',"minhnc62@gmail.com");
    I.fillField("#sign-in-password","016666");
    I.click("#btn-sign-in");
    

});