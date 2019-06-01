/// <reference types="Cypress" />
import { tz } from 'moment-timezone';

context('Dashboard', () => {

  beforeEach(() => {
    var nowNY = tz("America/New_York").format()
    cy.clock(Date.UTC(nowNY), ['Date']);

    cy.visit('/dashboard')
  })

  it('should display 4 heroes', () => {
    
    cy.contains('Narco').should('be.visible');
    cy.contains('Bombasto').should('be.visible');
    cy.contains('Celeritas').should('be.visible');
    cy.contains('Magneta').should('be.visible');
  })

});