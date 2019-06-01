/// <reference types="Cypress" />

context('Dashboard', () => {

  beforeEach(() => {
    cy.visit('/dashboard')
  })

  it('should display 4 heroes', () => {
    
    cy.contains('Narco').should('be.visible');
    cy.contains('Bombasto').should('be.visible');
    cy.contains('Celeritas').should('be.visible');
    cy.contains('Magneta').should('be.visible');
  })

});