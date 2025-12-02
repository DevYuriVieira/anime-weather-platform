module.exports = function() {
  return actor({
    // aqui você coloca custom steps se quiser
    // exemplo:
    // login(email, password) {
    //   this.amOnPage('/login');
    //   this.fillField('Email', email);
    //   this.fillField('Password', password);
    //   this.click('Login');
    // }
  });
};
