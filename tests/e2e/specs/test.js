// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update the display of the running total', () => {
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '36');
  });
})
