/// <reference types = "Cypress"/>
/// <reference types = "cypress-xpath"/>

Cypress.Commands.add("login", (username, password) => {
    cy.visit("/");
  
    cy.get(":nth-child(1) > .MuiInputBase-root").type(username);
    cy.get(":nth-child(2) > .MuiInputBase-root").type(password);
    cy.get("button[aria-label='Login']").click();
    // cy.get('.MuiButton-root').click();
  
  });