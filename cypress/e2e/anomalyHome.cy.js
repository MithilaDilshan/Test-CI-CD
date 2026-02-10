describe('template spec', () => {

  beforeEach(() => {
    cy.login("admin", "Sipmon123P@ssw0rd"); // Login before each test

    cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

    });
 
  it('passes', () => {   
        cy.xpath("//ul[contains(.,'Home')]/li[2]").click()
        cy.get('[data-cy="collapse"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner').contains('Anomaly Detection')
        .click()
        cy.contains('NMS').click()
        cy.wait(4000)

  })
  it('should show date range pickers and update data', () => {

    cy.xpath("//ul[contains(.,'Home')]/li[2]").click()
    cy.get('[data-cy="collapse"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner').contains('Anomaly Detection')
    .click()
    cy.contains('NMS').click()
    cy.wait(4000)
    cy.xpath("//div[@id='time-period']").click();
    cy.xpath("//ul[@aria-labelledby='time-select-label']").contains('Last week').click();

    cy.get('table').should('contain.text', 'Medium'); // example check
  });
})