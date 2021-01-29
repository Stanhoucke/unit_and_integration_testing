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

  // Arithmetic operations
  it('should update the display with result of adding', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '7');
  });

  it('should update the display with result of subtracting', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5');
  });

  it('should update the display with result of multiplying', () => {
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '12');
  });

  it('should update the display with result of dividing', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  });

  // Multiple operations
  it('should update the display with result of multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '21');
  });





})