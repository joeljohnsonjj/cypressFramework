import { ref1 } from '../../POMs[SwagLabs]/logins.cy';
import { loginPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import { productListingPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import * as allure from "allure-js-commons";

const obj1 = new ref1();
const obj2 = new loginPageRepository();
const obj3 = new productListingPageRepository();

describe('Login Page', () => {

  beforeEach(() => {
    cy.visit(obj2.mainUrl);
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

    cy.fixture(obj2.validLoginsFixture).then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
        cy.xpath(obj3.plpLogo).should('exist');
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
    cy.fixture(obj2.invalidLoginsFixture).then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
        cy.xpath(obj2.errorPop).should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
        cy.screenshot();
        cy.visit(obj2.mainUrl);
      });
    });
  });

  it('Erroneous Logins - Locked User', () => {
    allure.description("This test logs into website with a locked user");
    allure.displayName("Locked User");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Erroneous Logins");
    cy.xpath(obj2.usernameField).type('locked_out_user');
    cy.xpath(obj2.passwordField).type('secret_sauce');
    cy.xpath(obj2.loginButton).click();
    cy.xpath(obj2.lockedUserPopupPath).should('exist');
    cy.screenshot();
  });

  it('Empty Fields', () => {
    allure.description("This test logs into website with empty fields");
    allure.displayName("Empty Fields");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Empty Fields");
    cy.fixture(obj2.emptyFieldsFixture).then((users) => {
      users.forEach((user) => {
        obj1.loginPage(user.username, user.password);
  
        cy.xpath(obj2.errorPop)
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
  
        cy.visit(obj2.mainUrl);
      });
    });
  });

  it('Placeholders', () => {
    allure.description("This test checks the placeholders of the login page");
    allure.displayName("Placeholders");
    allure.epic("Sauce Labs");
    allure.feature("Login Page");
    allure.story("Placeholders");
    cy.xpath(obj2.usernameField)
      .should('have.attr', 'placeholder', 'Username');
    cy.xpath(obj2.passwordField)
      .should('have.attr', 'placeholder', 'Password');
    cy.xpath(obj2.loginButton)
      .should('have.attr', 'value', 'Login');
  });

});
