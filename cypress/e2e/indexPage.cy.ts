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
        cy.xpath(index.logoutButton).click();
    });

});