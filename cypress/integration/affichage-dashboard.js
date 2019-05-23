/// <reference types="Cypress" />
import { tz } from 'moment-timezone';

context('Actions', () => {
    beforeEach(() => {
      var nowNY = tz("America/New_York").format()
      cy.clock(Date.UTC(nowNY), ['Date']);

      cy.visit('http://localhost:4200/dashboard')
    })
  
    it('afficher dashboard', () => {
      
      cy.contains('Narco').should('be.visible');
      cy.contains('Bombasto').should('be.visible');
      cy.contains('Celeritas').should('be.visible');
      cy.contains('Magneta').should('be.visible');
    })
  })
