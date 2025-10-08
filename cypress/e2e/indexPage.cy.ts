import { allureReporting } from '../Pages/ObjectRepository.cy';
import { indexPageFunctionalities } from '../Pages/indexPage.cy';
import { indexPageRepository } from '../Pages/ObjectRepository.cy';
const allu = new allureReporting();
const indexPage = new indexPageFunctionalities();
const index = new indexPageRepository();

describe('Index Page', () => {

    beforeEach(() => {
        cy.visit(index.indexPage);
    });

    it('Valid Register', () => {
        allu.sendValues("Click on Register to open Test Registration Portal, Enter Values and click on register", "Register", "Critical", "ParaBank", "Index Page", "Register");
        indexPage.registrationFlow();
    });

    it('Valid Login', () => {
        allu.sendValues("Enter correct username and password and click 'LOG IN'; should navigate to account dashboard", "Login", "Critical", "ParaBank", "Index Page", "Login");
        // Register a new user and get the generated credentials
        const userData = indexPage.registrationFlow();
        // Use the same credentials to login
        indexPage.loginFlow(userData.username, userData.password);
        cy.xpath(index.welcomeMessage).should('contain.text', 'Welcome');
        cy.log("Login successful");
    });

    it('Invalid Login', () => {
        allu.sendValues(" Enter incorrect username or password and click 'LOG IN'; should display error message.", "Login", "Critical", "ParaBank", "Index Page", "Login");
        cy.fixture('invalidLogins').then((invalidLogins) => {
            const invalidUser = invalidLogins[0]; // Use first invalid login
            indexPage.loginFlow(invalidUser.username, invalidUser.password);
            cy.xpath(index.errorMessage).should('contain.text', 'The username and password could not be verified.');
        });
    });

    it('Empty Fields', () => {
        allu.sendValues("Leave username and password blank, click 'LOG IN'; should prompt user to fill mandatory fields.", "Login", "Critical", "ParaBank", "Index Page", "Login");
        cy.fixture('emptyFields').then((emptyFields) => {
            emptyFields.forEach((testCase, caseIndex) => {
                cy.log(`Testing case ${caseIndex + 1}: username=${testCase.username || 'empty'}, password=${testCase.password || 'empty'}`);
                indexPage.loginFlow(testCase.username, testCase.password);
                cy.xpath(index.errorMessage).should('contain.text', 'Please enter a username and password.');
            });
        });
    });

    it('Forgot Login Info', () => {
        allu.sendValues("Click the 'Forgot login info?' link; should redirect to recovery/reset procedure.", "Forgot Login Info", "Critical", "ParaBank", "Index Page", "Forgot Login Info");
        cy.xpath(index.forgotLoginInfoLink).click();
        cy.xpath(index.custLookupTitle).should('contain.text', 'Customer Lookup');
    });

    it('Register Link', () => {
        allu.sendValues("Click on 'Register'; should go to account registration page.", "Register Link", "Critical", "ParaBank", "Index Page", "Register Link");
        cy.xpath(index.registerLink).click();
        cy.xpath(index.registerPageTitle).should('contain.text', 'Signing up is easy!');
    });

    it.only('Latest news links', () => {
        allu.sendValues("Verify all links within latest news section navigates to respective page", "Latest news links", "Critical", "ParaBank", "Index Page", "Latest news links");
        cy.xpath(index.latestNewsLink1).click();
        cy.xpath(index.newsPageTitle).should('contain.text', 'ParaBank News');
        cy.go('back');
        cy.xpath(index.latestNewsLink2).click();
        cy.xpath(index.newsPageTitle).should('contain.text', 'ParaBank News');
        cy.go('back');
        cy.xpath(index.latestNewsLink3).click();
        cy.xpath(index.newsPageTitle).should('contain.text', 'ParaBank News');
        cy.go('back');
        cy.xpath(index.latestNewsReadMoreLink).click();
        cy.xpath(index.newsPageTitle).should('contain.text', 'ParaBank News');
        cy.go('back');
    });

});