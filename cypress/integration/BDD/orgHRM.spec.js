import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit org HRM site", () => {
  cy.log("Hello");
});

When("valid username", () => {
  cy.log("Hi...");
});

When("valid passeord", () => {
  cy.log("Hey!");
});

And("click on Login button", () => {
  cy.log("Bye!");
});

Then("Validate Dashboad", () => {
  cy.log("Good Day");
});

