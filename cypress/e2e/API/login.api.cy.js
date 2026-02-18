describe("ReqRes Login API", () => {
  it("should login successfully", () => {
    cy.request({
      method: "POST",
      url: "/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: Cypress.env("API_USER_NAME"),
        password: Cypress.env("API_PASSWORD"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("accessToken");
    });
  });
});
