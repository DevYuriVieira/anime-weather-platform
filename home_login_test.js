Feature('Home & Login');

Scenario('Home carrega com seções principais e card de login', ({ I }) => {
  I.amOnPage('/');

  // Card de login
  I.see('Welcome Back!');
  I.see('Enter your details to access the best of Anime & Weather.');

  // Botões
  I.see('Login');
  I.see('Sign Up');

});

Scenario('Mostrar erro ao tentar logar com campos vazios', ({ I }) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Please fill in all fields.');
});

Scenario('Mostrar erro ao logar com credenciais inválidas', ({ I }) => {
  I.amOnPage('/');

  I.fillField('input[placeholder="User or Email"]', 'wrongUser');
  I.fillField('input[placeholder="Password"]', 'wrongPass');
  I.click('Login');

  I.see('Invalid credentials!');
});

Scenario('Login bem-sucedido com admin/admin redireciona para Dashboard', ({ I }) => {
  I.amOnPage('/');

  I.fillField('input[placeholder="User or Email"]', 'admin');
  I.fillField('input[placeholder="Password"]', 'admin');
  I.click('Login');

  I.waitInUrl('/dashboard', 5);
  I.see("What's the vibe today?");
});

Scenario('Login bem-sucedido com usuario/123456 redireciona para Dashboard', ({ I }) => {
  I.amOnPage('/');

  I.fillField('input[placeholder="User or Email"]', 'usuario');
  I.fillField('input[placeholder="Password"]', '123456');
  I.click('Login');

  I.waitInUrl('/dashboard', 5);
  I.see("What's the vibe today?");
});