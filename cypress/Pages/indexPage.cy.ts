import { RandomDataGenerator, UserRegistrationData } from '../utilities/randomDataGenerator';
import { indexPageRepository } from '../Pages/ObjectRepository.cy';
const index = new indexPageRepository();

export class indexPageFunctionalities {

    registrationFlow() {
        cy.xpath(index.registerLink).click();
        this.completeRegistrationWithRandomData();
        cy.xpath(index.registerButton).click();
        cy.xpath(index.successMessage).should('contain.text', 'Your account was created successfully. You are now logged in.');
    }

    completeRegistrationWithRandomData() {
        // Generate random user data
        const userData: UserRegistrationData = RandomDataGenerator.generateCompleteUserData();
        
        // Fill form fields with random data using ObjectRepository selectors
        cy.xpath(index.firstNameField).type(userData.firstName);           // First Name
        cy.xpath(index.lastNameField).type(userData.lastName);             // Last Name
        cy.xpath(index.addressField).type(userData.address);               // Address
        cy.xpath(index.cityField).type(userData.city);                     // City
        cy.xpath(index.stateField).type(userData.state);                   // State
        cy.xpath(index.zipCodeField).type(userData.zipCode);               // Zip Code
        cy.xpath(index.phoneNumberField).type(userData.phoneNumber);       // Phone Number
        cy.xpath(index.ssnField).type(userData.ssn);                       // SSN
        cy.xpath(index.usernameField).type(userData.username);             // Username
        cy.xpath(index.passwordField).type(userData.password);             // Password
        cy.xpath(index.confirmPasswordField).type(userData.confirmPassword); // Confirm Password
        
        return userData; // Return the generated data for potential use in test
    }

}