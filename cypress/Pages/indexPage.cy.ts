import { RandomDataGenerator, UserRegistrationData } from '../utilities/randomDataGenerator';
import { indexPageRepository } from '../Pages/ObjectRepository.cy';
const index = new indexPageRepository();

export class indexPageFunctionalities {

    loginFlow(username: string, password: string) {
        cy.xpath(index.usernameField1).type(username);
        cy.xpath(index.passwordField1).type(password);
        cy.xpath(index.loginButton).click();
        cy.xpath(index.welcomeMessage).should('contain.text', 'Welcome');
        cy.log("Login successful");
    }

    registrationFlow() {
        cy.xpath(index.registerLink).click();
        const userData = this.completeRegistrationWithRandomData();
        cy.xpath(index.registerButton).click();
        cy.xpath(index.successMessage).should('contain.text', 'Your account was created successfully. You are now logged in.');
        cy.log("Registration successful");
        cy.xpath(index.logoutButton).click();
        return userData; // Return userData so credentials can be used in loginFlow
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