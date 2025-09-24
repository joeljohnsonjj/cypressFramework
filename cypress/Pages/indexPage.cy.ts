import { RandomDataGenerator, UserRegistrationData } from '../utilities/randomDataGenerator';

export class indexPageFunctionalities {

    completeRegistrationWithRandomData() {
        // Generate random user data
        const userData: UserRegistrationData = RandomDataGenerator.generateCompleteUserData();
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
    }

}