Feature('Dashboard UI');

Scenario('Dashboard mostra título e campo de busca', ({ I }) => {
  I.amOnPage('/dashboard');

  I.see("What's the vibe today?");
  I.seeElement('input[placeholder="Search for a city..."]');
});

Scenario('Digitar no campo de busca não quebra a tela', ({ I }) => {
  I.amOnPage('/dashboard');

  I.fillField('input[placeholder="Search for a city..."]', 'Rio de Janeiro');

  I.see("What's the vibe today?");
});