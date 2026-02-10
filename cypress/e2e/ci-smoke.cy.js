describe('CI Smoke Test', () => {
  it('runs successfully in CI', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
