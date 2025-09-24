import * as allure from "allure-js-commons";

export class indexPageRepository{
    indexPage = 'https://parabank.parasoft.com/parabank/index.htm'
    registerLink = "/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/p[2]/a[1]";
    
    // Registration form fields
    firstNameField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[1]/td[2]/input";
    lastNameField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[2]/td[2]/input";
    addressField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[3]/td[2]/input";
    cityField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[4]/td[2]/input";
    stateField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[5]/td[2]/input";
    zipCodeField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[6]/td[2]/input";
    phoneNumberField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[7]/td[2]/input";
    ssnField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[8]/td[2]/input";
    usernameField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[10]/td[2]/input";
    passwordField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[11]/td[2]/input";
    confirmPasswordField = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[12]/td[2]/input";
    registerButton = "/html/body/div[1]/div[3]/div[2]/form/table/tbody/tr[13]/td[2]/input";
    
    successMessage = "/html/body/div[1]/div[3]/div[2]/p";
}

export class allureReporting{
    sendValues(description, displayName, severity, epic, feature, story) {
        allure.description(description);
        allure.displayName(displayName);
        allure.severity(severity);
        allure.epic(epic);
        allure.feature(feature);
        allure.story(story);
    }
}