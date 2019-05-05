/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/dashboard')
    })
  
    it('afficher dashboard', () => {
      cy.contains('Narco').should('be.visible');
      cy.contains('Bombasto').should('be.visible');
      cy.contains('Celeritas').should('be.visible');
      cy.contains('Magneta').should('be.visible');
    })
  })
