/// <reference types="Cypress" />

context('Hero Detail', () => {
  beforeEach(() => {
    cy.visit('/heroes')
  })

  it('should display the hero\'s details after we click on him (start of list)', () => {
    cy.get('ul.heroes>li:first-child').click()
    cy.get('app-hero-detail h2').should('contain', 'MR. NICE Details')
    cy.get('app-hero-detail div')
      .should('contain', "id: 11")
    cy.get('app-hero-detail input').should('have.value', 'Mr. Nice')
    
  })

  it('should display the hero\'s details after we click on him (end of list)', () => {
    cy.get('ul.heroes>li:last-child').click()
    cy.get('app-hero-detail h2').should('contain', 'TORNADO Details')
    cy.get('app-hero-detail div')
      .should('contain', "id: 20")
    cy.get('app-hero-detail input').should('have.value', 'Tornado')
    
  })
})
