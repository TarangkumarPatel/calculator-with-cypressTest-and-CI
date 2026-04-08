describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    // Visits the Next.js development server
    cy.visit('http://localhost:3000');
  });

  it('Addition: 5 + 3 = 8', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '+').click();
    cy.contains('button', '3').click();
    cy.contains('button', '=').click();
    cy.get('[data-cy="display"]').should('have.value', '8');
  });

  it('Subtraction: 10 - 4 = 6', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '0').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();
    cy.get('[data-cy="display"]').should('have.value', '6');
  });

  it('Multiplication: 6 * 7 = 42', () => {
    cy.contains('button', '6').click();
    cy.contains('button', '*').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();
    cy.get('[data-cy="display"]').should('have.value', '42');
  });

  it('Division: 15 / 3 = 5', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '5').click();
    cy.contains('button', '/').click();
    cy.contains('button', '3').click();
    cy.contains('button', '=').click();
    cy.get('[data-cy="display"]').should('have.value', '5');
  });
});