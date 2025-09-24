import { allureReporting } from '../Pages/ObjectRepository.cy';
import { RandomDataGenerator, UserRegistrationData } from '../utilities/randomDataGenerator';
const allu = new allureReporting();

describe('Index Page', () => {

    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    it('Valid test register', () => {
        allu.sendValues("Click on Register to open Test Registration Portal, Enter Values and click on register", "Register", "Critical", "ParaBank", "Index Page", "Register");
        
        // Generate random user data
        const userData: UserRegistrationData = RandomDataGenerator.generateCompleteUserData();
        
        cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/p[2]/a[1]").click();
        
        // Fill form fields with random data
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[1]/td[2]/input").type(userData.firstName);     // First Name
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[2]/td[2]/input").type(userData.lastName);      // Last Name
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[3]/td[2]/input").type(userData.address);       // Address
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[4]/td[2]/input").type(userData.city);          // City
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[5]/td[2]/input").type(userData.state);         // State
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[6]/td[2]/input").type(userData.zipCode);       // Zip Code
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[7]/td[2]/input").type(userData.phoneNumber);   // Phone Number
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[8]/td[2]/input").type(userData.ssn);           // SSN
        
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[10]/td[2]/input").type(userData.username);     // Username
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[11]/td[2]/input").type(userData.password);     // Password
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[12]/td[2]/input").type(userData.confirmPassword); // Confirm Password
        
        cy.xpath("/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[13]/td[2]/input").click();
        cy.xpath("/html/body/div[1]/div[3]/div[2]/p").should('contain.text', 'Your account was created successfully. You are now logged in.');
        
    });

});