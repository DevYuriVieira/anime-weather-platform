Feature('Navbar');

Scenario('Navbar aparece com links principais', ({ I }) => {
  I.amOnPage('/');

  I.see('Home');
  I.see('About Us');
  I.see('Contact Us');
});

Scenario('Clicar em Home mantém na rota /', ({ I }) => {
  I.amOnPage('/dashboard');

  // Clica no logo ou no link Home
  I.click('Home');

  I.waitInUrl('/', 5);
  I.see('Welcome Back!');
});

Scenario('Clicar em Contact Us deixa a seção de contato visível', ({ I }) => {
  I.amOnPage('/');

  I.click('Contact Us');
});