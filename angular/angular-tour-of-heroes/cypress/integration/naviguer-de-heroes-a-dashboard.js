/// <reference types="Cypress" />

context('Actions', () => {
    
    it('naviguer de l\'accueil à la liste de heros', () => {
      cy.visit('http://localhost:4200/')
      cy.get("#btn_heroes").click();
      cy.get("app-heroes ul.heroes").should("be.visible");
      cy.get("app-dashboard div.grid").should("not.be.visible");

    })

    it('naviguer de l\'accueil au dashboard', () => {
      cy.visit('http://localhost:4200/')
      cy.get("#btn_dashboard").click();
      cy.get("app-dashboard div.grid").should("be.visible");
      cy.get("app-heroes ul.heroes").should("not.be.visible");
    })

    it('naviguer du dashboard à la liste de heros', () => {
      cy.visit('http://localhost:4200/dashboard')
      cy.get("#btn_heroes").click();
      cy.get("app-heroes ul.heroes").should("be.visible");
      cy.get("app-dashboard div.grid").should("not.be.visible");

    })

    it('naviguer de la liste de héros au dashboard', () => {
      cy.visit('http://localhost:4200/heroes')
      cy.get("#btn_dashboard").click();
      cy.get("app-dashboard div.grid").should("be.visible");
      cy.get("app-heroes ul.heroes").should("not.be.visible");
    })


  })
