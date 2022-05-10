/// <reference types="cypress" />

context('My test task for Pecode company', () => {
    beforeEach(() => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('input[value="Login"]').should('be.visible')
      })

      it('Login without creadentitals', () => {
        cy.get('input[value="Login"]').click()
        cy.contains("Please enter your password.").should('be.visible')
        cy.contains("Please enter username.").should('be.visible')
      })

      it('Write incorrect username and password', () => {
        cy.loginWithAllCreditals(Cypress.env('invalidUsername'), Cypress.env('invalidPassword'))
        cy.contains("No accout found with that username.").should('be.visible')
      })

      it('Write incorrect username and than login', () => {
        cy.typeUsername(Cypress.env('invalidUsername'))
        cy.get('input[value="Login"]').click()
        cy.contains("Please enter your password.").should('be.visible')
      })
      it('Write only incorrect password and then login', () => {
        cy.typePassword(Cypress.env('invalidPassword'))
        cy.get('input[value="Login"]').click()
        cy.contains("Please enter username.").should('be.visible')
      })
})