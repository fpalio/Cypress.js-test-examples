/// <reference types="cypress">

describe("Our First Test Suit", () => {
  it("First Test", () => {
    //Method allows the test to visit a page
    //this is grabbing the base URL from the configuration File.
    cy.visit("/");

    //This is looking for text values  in this case text = 'Forms'
    cy.contains("Forms").click();

    cy.contains("Form Layouts").click();

    //basic method how to retrive a DOM element
    // Cypress uses Jquery Selector engine
    cy.get("input");
    cy.get("#inputEmail");
    cy.get(".input-full-width");
    cy.get("[placeholder]"); //Attribute Name
    cy.get('[placeholder="Email"]'); //Attribute Name AND value
    cy.get('[class="input-full-width size-medium shape-rectangle"]'); //full class attibute with its full value

    //by Tag name and attribute with value
    cy.get('input[placeholder="Email"]');
    //find by two different attributes
    cy.get('[placeholder="Email"][type="email"]');
  });
});
