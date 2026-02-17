describe('SIPMon Login API', () => {
  it('should login successfully', () => {

    cy.log('API_USER:', Cypress.env('API_USER'))
    cy.log('API_PASS exists:', !!Cypress.env('API_PASS'))

    cy.request({
      method: 'POST',
      url: '/api/latest/authentication/providers/configurations/local',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        login: Cypress.env('API_USER'),
        password: Cypress.env('API_PASS')
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.exist
    })
  })
})
