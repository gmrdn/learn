/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/heroes')
    })
  
    it('renommer le premier héro de la liste', () => {
      cy.get('ul.heroes>li:first-child').click()
      cy.get('app-hero-detail input#name')
        .clear()
        .should('have.value', '')
        .type("Renommé")
        .should('have.value','Renommé');
      cy.get('#btn_heroes').click();
      cy.get('ul.heroes>li:first-child').should('contain','Renommé')
    })
  })
