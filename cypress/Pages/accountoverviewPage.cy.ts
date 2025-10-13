import { openaccountPageRepository } from './objectRepository.cy';
import { accountoverviewPageRepository } from './objectRepository.cy';

const openaccount = new openaccountPageRepository();
const accountoverview = new accountoverviewPageRepository();

export class accountoverviewPageFunctionalities {
    newAccountNumber: string;

    verifyAccountDetails(val : number) {
        if(val == 1) {
            this.verifyAccountDetails(0);
        }
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
            cy.xpath(openaccount.accountOverviewTable).contains(this.newAccountNumber).click();
            cy.xpath(accountoverview.accountNumberElement).should('contain.text', this.newAccountNumber);
          });
    }
}