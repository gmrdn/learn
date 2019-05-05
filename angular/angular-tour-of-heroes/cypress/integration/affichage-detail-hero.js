/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/heroes')
    })
  
    it('afficher détail du premier héro de la liste', () => {
      cy.get('ul.heroes>li:first-child').click()
      cy.get('app-hero-detail h2').should('contain', 'MR. NICE Details')
      cy.get('app-hero-detail div')
        .should('contain', "id: 11")
      cy.get('app-hero-detail input').should('have.value', 'Mr. Nice')
      
    })

    it('afficher détail du dernier héro de la liste', () => {
      cy.get('ul.heroes>li:last-child').click()
      cy.get('app-hero-detail h2').should('contain', 'TORNADO Details')
      cy.get('app-hero-detail div')
        .should('contain', "id: 20")
      cy.get('app-hero-detail input').should('have.value', 'Tornado')
      
    })
  })
