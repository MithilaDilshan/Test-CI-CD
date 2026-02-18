describe('CI Smoke Test', () => {
  it('runs successfully in CI', () => {
    cy.visit(Cypress.env('SMOKE_URL'))
    cy.contains('Kitchen Sink')
  })
})
