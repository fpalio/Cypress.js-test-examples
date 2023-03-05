//Simple Form
describe('Fill out the "Using the Grid" Form', () => {
  it.only("Fill out Form", () => {
    // Intercepts the xhr call
    cy.intercept({
      pathname: "/pages/forms/layouts",
    }).as("layoutRefresh");

    // Created Custom Cypress command as short hand to visit Form Layout page...
    cy.visitFormLayout();

    cy.contains("nb-card", "Using the Grid").then((form) => {
      //fill out email input
      cy.wrap(form).find("#inputEmail1").type("test@email.com");
      //fill out password input
      cy.wrap(form).find("#inputPassword2").type("27dhsjsjdh");
      //click on an option
      cy.wrap(form).contains("Option 2").click();
      //submit Form and check response
      cy.wrap(form).find("form").submit();

      cy.wait("@layoutRefresh").then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
    });
  });
});
