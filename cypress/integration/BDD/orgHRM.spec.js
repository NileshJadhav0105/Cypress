// import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Given("visit org HRM site", () => {
//   cy.log("Hello");
// });

// When("valid username", () => {
//   cy.log("Hi...");
// });

// When("valid passeord", () => {
//   cy.log("Hey!");
// });

// And("click on Login button", () => {
//   cy.log("Bye!");
// });

// Then("Validate Dashboad", () => {
//   cy.log("Good Day");
// });


import { Given, When, And, Then } from "cypress-cucumber-preprocessor"

Given("visit org HRM site", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})

And('valid username', () => {
    cy.get('#txtUsername').type('Admin')
})

And('valid passeord', () => {
    cy.get('#txtPassword').type('admin123')
})

When('click on Login button', () => {
    cy.get('#btnLogin').click()
})

Then('Validate Dashboad', () => {
    cy.contains('Dashboard').should('be.visible')
})