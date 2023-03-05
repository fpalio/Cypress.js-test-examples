//MAKE SURE THE BASE URL IS CORRECT
describe("Profitly Login Test", () => {
  it("Test Login Positive", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    //go to the log in page
    cy.visit("/login");
    //dismiss modal
    cy.contains('[data-dismiss="modal"]', "Enter").click();
    //enter credentials into intput fields
    cy.get("#j_username").type("fpaliouras@somersi.com");
    cy.get("#j_password").type("Francisco@Profitly");
    //submit form
    cy.contains("button", "Log In").click();

    //wait for page to load
    cy.wait(2000);
    //check for success
    cy.contains("Dashboard").should("be.visible");
  });
});
