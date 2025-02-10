import { logins } from '../Pages/loginPage.cy';
import { loginPageRepository } from '../Pages/ObjectRepository.cy';
import { productListingPageRepository } from '../Pages/ObjectRepository.cy';
import * as allure from "allure-js-commons";
import { allureReporting } from '../Pages/ObjectRepository.cy';

const obj1 = new logins();
const obj2 = new loginPageRepository();
const obj3 = new productListingPageRepository();
const allu = new allureReporting();

describe('Login Page', () => {

  beforeEach(() => {
    cy.visit(obj2.mainUrl);
  });

  it('Valid Logins', () => { 

    // important allure annotations
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
    allu.sendValues("This test attempts to log into the website with Invalid Input", "Invalid Logins", "Critical", "Sauce Labs", "Login Page", "Invalid Logins");
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
    allu.sendValues("This test logs into website with a locked user", "Locked User", "Critical", "Sauce Labs", "Login Page", "Erroneous Logins");
    cy.xpath(obj2.usernameField).type('locked_out_user');
    cy.xpath(obj2.passwordField).type('secret_sauce');
    cy.xpath(obj2.loginButton).click();
    cy.xpath(obj2.lockedUserPopupPath).should('exist');
    cy.screenshot();
  });

  it('Empty Fields', () => {
    allu.sendValues("This test logs into website with empty fields", "Empty Fields", "Normal", "Sauce Labs", "Login Page", "Empty Fields");
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
    allu.sendValues("This test checks the placeholders of the login page", "Placeholders", "Minor", "Sauce Labs", "Login Page", "Placeholders");
    cy.xpath(obj2.usernameField)
      .should('have.attr', 'placeholder', 'Username');
    cy.xpath(obj2.passwordField)
      .should('have.attr', 'placeholder', 'Password');
    cy.xpath(obj2.loginButton)
      .should('have.attr', 'value', 'Login');
  });

});
