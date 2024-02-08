describe('My first test', () => {
  it('visits the app', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to my React TypeScript app!');
  });
});