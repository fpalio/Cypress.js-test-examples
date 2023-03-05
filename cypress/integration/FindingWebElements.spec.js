describe("Finding Web Elements Test", () => {
  // The only key word implies that this test is the only one runnning in this
  // test suit.
  //it.only("Second Test", () => {
  it("Second Test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //contains is Case-sensative
    //when there are multiple occurances of this text it gets the first one
    cy.contains("Sign in");

    // To differentiate we can add more specific information like an attribute.
    // Translate to English : Get Web element with [status="warning"] attribute which contains
    // the text 'Sign in'
    cy.contains('[status="warning"]', "Sign in");

    //Using other elements to find element which could be dificult to locate
    // using .find() and .parent() are used for traversing using elements as references
    // cy.find() will not work without a previous locator chained before
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    // short handing  .parent().find() into one call
    // by looking for the parent that contains both elements and
    // giving it reference to the locatable child.
    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it.only("Then and Wrap Methods", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputEmail1"]')
    //   .should("contain", "Email");

    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputPassword2"]')
    //   .should("contain", "Password");

    // cy.contains("nb-card", "Basic form")
    //   .find('[for="exampleInputEmail1"]')
    //   .should("contain", "Email address");

    // cy.contains("nb-card", "Basic form")
    //   .find('[for="exampleInputPassword1"]')
    //   .should("contain", "Password");

    // const firstForm = cy.contains("nb-card", "Basic form")
    // this does not work due to the fact that cypress is async and will not retain this information

    cy.contains("nb-card", "Using the Grid").then((firstForm) => {
      //firstFrom them becomes a reference to the cy.contains() call
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();

      const passwordLabelFirst = firstForm
        .find('[for="inputPassword2"]')
        .text();

      //Making an assertion
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");

      cy.contains("nb-card", "Basic form").then((secondForm) => {
        const passwordSecond = secondForm
          .find('[for="exampleInputPassword1"]')
          .text();
        expect(passwordLabelFirst).to.equal(passwordSecond);

        // this switches back the context from JQUERY inside the THEN function
        // back to Cypress where more traversing can occure from operation variables
        cy.wrap(secondForm)
          .find('[for="exampleInputPassword1"]')
          .should("contain", "Password");
      });
    });
  });
});
