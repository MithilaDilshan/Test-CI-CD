describe("Metric add positive", () => {
  beforeEach(() => {
    cy.login("admin", "Sipmon123P@ssw0rd"); // Login before each test

    cy.on("uncaught:exception", (err, runnable) => {
      // Returning false here prevents Cypress from failing the test
      return false;
    });

    cy.xpath("//ul[contains(.,'Home')]/li[2]").click();
    cy.get(
      '[data-cy="collapse"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner',
    )
      .contains("Anomaly Detection")
      .click();
    cy.contains("NMS").click();
    cy.wait(4000);
  });

  it("Pass", () => {
    cy.xpath("//button[normalize-space()='Metrics']").click();

    cy.contains("Add New Metric").should("be.visible");
    cy.get('svg[data-testid="AddIcon"]').closest("button").click();

    cy.xpath("/html[1]/body[1]/div[4]/div[3]/div[1]/h2[1]").should(
      "be.visible",
    );
    cy.xpath("(//label[normalize-space()='Host'])[1]").should(
      "have.text",
      "Host",
    );
    cy.get(".css-chq866 > .MuiFormControl-root > .MuiInputBase-root").click();
    cy.xpath("//ul[@role='listbox']").contains("Sipmon-Server").click();

    cy.xpath("(//label[normalize-space()='Service'])[1]").should(
      "have.text",
      "Service",
    );
    cy.get(".css-14vwc75 > .MuiFormControl-root > .MuiInputBase-root").click();
    cy.xpath("//ul[@role='listbox']").contains("Cpu").click();

    cy.xpath("(//label[normalize-space()='Metric'])[1]")
      .should("have.text", "Metric")
      .parents('[class*="MuiFormControl"]') // scope to the field container
      .within(() => {
        cy.get('svg[data-testid="ArrowDropDownIcon"]')
          .closest("button")
          .click();
      });

    cy.xpath("//ul[@role='listbox']").contains("cpu_1").click();

    cy.xpath("(//label[normalize-space()='Alert Severity'])[1]").should(
      "have.text",
      "Alert Severity",
    );
    cy.xpath("//input[@value='Low']").should("have.value", "Low");

    cy.xpath("(//label[normalize-space()='Alert Severity'])[1]")
      .parents('[class*="MuiFormControl"]') // scope to the field container
      .within(() => {
        cy.get('svg[data-testid="ArrowDropDownIcon"]')
          .closest("button")
          .click();
      });
    cy.xpath("//ul[@role='listbox']").contains("Medium").click();

    cy.xpath("(//label[normalize-space()='Contacts'])[1]")
      .parents('[class*="MuiFormControl"]') // scope to the field container
      .within(() => {
        cy.get('svg[data-testid="ArrowDropDownIcon"]')
          .closest("button")
          .click();
      });
    cy.xpath("//ul[@role='listbox']").contains("User").click();

    cy.xpath("(//label[normalize-space()='Contact Groups'])[1]")
      .parents('[class*="MuiFormControl"]') // scope to the field container
      .within(() => {
        cy.get('svg[data-testid="ArrowDropDownIcon"]')
          .closest("button")
          .click();
      });
    cy.xpath("//ul[@role='listbox']").contains("Supervisors").click();

    cy.xpath("//input[@type='checkbox']").should("be.checked");
    cy.xpath("//button[.='Submit']").click();
  });

  it("nagetive case", () => {
    cy.xpath("//button[normalize-space()='Metrics']").click();

    cy.contains("Add New Metric").should("be.visible");
    cy.get('svg[data-testid="AddIcon"]').closest("button").click();

    cy.xpath("/html[1]/body[1]/div[4]/div[3]/div[1]/h2[1]").should(
      "be.visible",
    );
    cy.xpath("(//label[normalize-space()='Host'])[1]").should(
      "have.text",
      "Host",
    );
    cy.get(".css-chq866 > .MuiFormControl-root > .MuiInputBase-root").click();
    cy.xpath("//ul[@role='listbox']").contains("Sipmon-Server").click();

    cy.xpath("(//label[normalize-space()='Service'])[1]").should(
      "have.text",
      "Service",
    );
    cy.get(".css-14vwc75 > .MuiFormControl-root > .MuiInputBase-root").click();
    cy.xpath("//ul[@role='listbox']").contains("Cpu").click();

    // cy.xpath("(//label[normalize-space()='Metric'])[1]")
    //   .should("have.text", "Metric")
    //   .parents('[class*="MuiFormControl"]') // scope to the field container
    //   .within(() => {
    //     cy.get('svg[data-testid="ArrowDropDownIcon"]')
    //       .closest("button")
    //       .click();
    //   });

    // cy.xpath("//ul[@role='listbox']").contains("cpu_1").click();

    cy.xpath("//button[.='Submit']").should("be.disabled");
    // cy.xpath("//button[.='Submit']").trigger("mouseover")
  });
});
