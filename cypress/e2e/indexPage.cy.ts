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

    it('Valid test register', () => {
        allu.sendValues("Click on Register to open Test Registration Portal, Enter Values and click on register", "Register", "Critical", "ParaBank", "Index Page", "Register");
        cy.xpath(index.registerLink).click();
        indexPage.completeRegistrationWithRandomData();  
        cy.xpath(index.registerButton).click();
        cy.xpath(index.successMessage).should('contain.text', 'Your account was created successfully. You are now logged in.');
        
    });

    it('Valid test login', () => {
        allu.sendValues("Enter correct username and password and click 'LOG IN'; should navigate to account dashboard", "Login", "Critical", "ParaBank", "Index Page", "Login");
        
    });

});