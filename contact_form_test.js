Feature('Contact form');

Scenario('Mostrar erros quando enviar formulário vazio', ({ I }) => {
  I.amOnPage('/');
  I.scrollTo('#contact');

  I.click('Send Message');

  I.see('First name is required.');
  I.see('Last name is required.');
  I.see('Email is required.');
  I.see('Message cannot be empty.');
});
