import { indexPageFunctionalities } from './indexPage.cy';
import { indexPageRepository } from './objectRepository.cy';
import { openaccountPageRepository } from './objectRepository.cy';
import { UserRegistrationData } from '../utilities/randomDataGenerator';

const indexPage = new indexPageFunctionalities();
const index = new indexPageRepository();
const openaccount = new openaccountPageRepository();

export class openaccountPageFunctionalities {
    newAccountNumber: string;

    registerAndLogin(): UserRegistrationData {
        cy.visit(index.indexPage);
        const userCredentials = indexPage.registrationFlow();
        indexPage.loginFlow(userCredentials.username, userCredentials.password);
        // Verify successful login
        cy.xpath(index.welcomeMessage).should('contain.text', 'Welcome');
        cy.log("Account registration and login completed successfully");
        return userCredentials;
    }

    createCheckingAccount(val : number) {
        cy.xpath(openaccount.openNewAccountLink).click();
        cy.xpath(openaccount.checkingAccountDropdown).select('CHECKING');
        cy.xpath(openaccount.fromAccountDropdown).select(val);
        cy.xpath(openaccount.openNewAccountButton).click();
        cy.wait(3000);
        cy.xpath(openaccount.accountOpenedTitle).should('contain.text', 'Account Opened!');
        cy.log("Checking account opened successfully");
        cy.xpath(openaccount.newAccNumberLink)
          .invoke('text')
          .then((accNo) => {
            this.newAccountNumber = accNo;
            cy.log("account number: " + this.newAccountNumber);
            // Navigate to account overview and verify account exists
            cy.xpath(openaccount.accountOverviewLink).click();
            cy.xpath(openaccount.accountOverviewTable)
              .contains(this.newAccountNumber)
              .should('exist')
              .then(() => {
                cy.log('Account exists in Accounts Overview');
              });
          });
    }

}
