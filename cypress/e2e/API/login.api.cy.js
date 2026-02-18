describe('DummyJSON Authentication API', () => {

  let authToken

  /**
   * ✅ LOGIN BEFORE ALL TESTS
   * Token is reused across tests (best practice)
   */
  before(() => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: Cypress.env('API_USER_NAME'),
        password: Cypress.env('API_PASSWORD')
      }
    }).then((response) => {
      expect(response.status).to.eq(200)

      // Validate response structure
      expect(response.body).to.have.property('accessToken')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('username')

      // Save token for later tests
      authToken = response.body.accessToken
    })
  })

  /**
   * ✅ POSITIVE LOGIN TEST
   */
  it('should login successfully with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        username: Cypress.env('API_USER_NAME'),
        password: Cypress.env('API_PASSWORD')
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.accessToken).to.be.a('string')
    })
  })

  /**
   * ❌ NEGATIVE LOGIN TEST
   */
  it('should fail login with invalid password', () => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      failOnStatusCode: false,
      body: {
        username: Cypress.env('API_USER_NAME'),
        password: 'wrongpassword'
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('message')
    })
  })

  /**
   * 🔐 AUTHENTICATED API TEST
   */
  it('should access protected endpoint using token', () => {
    cy.request({
      method: 'GET',
      url: '/auth/me',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('username')
      expect(response.body).to.have.property('id')
    })
  })

})
