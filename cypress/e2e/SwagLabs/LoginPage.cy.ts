import { ref1 } from '../../POMs[SwagLabs]/logins.cy';
import * as allure from "allure-js-commons";

const obj1 = new ref1();

describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Valid Logins', () => { 

    allure.description("This test attempts to log into the website.");
    allure.displayName("Valid Login");
    allure.owner("Joel Johnson");
    allure.tags("Web Interface", "Authentication");
    allure.severity("Critical"); 

    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Valid Logins");

    cy.fixture('/SwagLabs/validTestLogins.json').then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]').should('exist');
        cy.screenshot(); // saves to allure report as well
      });
    });
  });

  it('Invalid Logins', () => {
    allure.description("This test attempts to log into the website with Invalid Input");
    allure.displayName("Invalid Logins");
    allure.tags("Web Interface", "Authentication");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Invalid Logins");
    cy.fixture('/SwagLabs/invalidTestLogins.json').then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]").should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        cy.screenshot();
        cy.visit('https://www.saucedemo.com/');
      });
    });
  });

  it('Erroneous Logins - Locked User', () => {
    allure.description("This test logs into website with a locked user");
    allure.displayName("Locked User");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Erroneous Logins");
    cy.xpath("//input[@id='user-name']").type('locked_out_user');
    cy.xpath("//input[@id='password']").type('secret_sauce');
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]").should('exist');
    cy.screenshot();
  });

  it('Empty Fields', () => {
    allure.description("This test logs into website with empty fields");
    allure.displayName("Empty Fields");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Empty Fields");
    cy.fixture('/SwagLabs/emptyFields.json').then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
  
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]")
          .invoke('text')
          .should((text) => {
            const expectedMessages = [
              'Epic sadface: Password is required',
              'Epic sadface: Username is required'
            ];
            // Ensure at least one of the expected messages is found
            expect(expectedMessages.some(msg => text.includes(msg))).to.be.true;
          });
        cy.screenshot();
  
        cy.visit('https://www.saucedemo.com/');
      });
    });
  });

  it('Placeholders', () => {
    allure.description("This test checks the placeholders of the login page");
    allure.displayName("Placeholders");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Placeholders");
    cy.xpath("//input[@id='user-name']")
      .should('have.attr', 'placeholder', 'Username');
    cy.xpath("//input[@id='password']")
      .should('have.attr', 'placeholder', 'Password');
    cy.xpath("//input[@id='login-button']")
      .should('have.attr', 'value', 'Login');
  });

});
