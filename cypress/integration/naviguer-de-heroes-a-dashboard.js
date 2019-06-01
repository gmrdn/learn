/// <reference types="Cypress" />

context('Navigation dans l\'application', () => {
    
    it('should navigate from home to the list of heroes', () => {
      cy.visit('/')
      cy.get("#btn_heroes").click();
      cy.get("app-heroes ul.heroes").should("be.visible");
      cy.get("app-dashboard div.grid").should("not.be.visible");

    })

    it('should navigate from home to the dashboard', () => {
      cy.visit('/')
      cy.get("#btn_dashboard").click();
      cy.get("app-dashboard div.grid").should("be.visible");
      cy.get("app-heroes ul.heroes").should("not.be.visible");
    })

    it('should navigate from the dashboard to the list of heroes', () => {
      cy.visit('/dashboard')
      cy.get("#btn_heroes").click();
      cy.get("app-heroes ul.heroes").should("be.visible");
      cy.get("app-dashboard div.grid").should("not.be.visible");

    })

    it('should navigate from the list of heroes to the dashboard', () => {
      cy.visit('/heroes')
      cy.get("#btn_dashboard").click();
      cy.get("app-dashboard div.grid").should("be.visible");
      cy.get("app-heroes ul.heroes").should("not.be.visible");
    })


  })
