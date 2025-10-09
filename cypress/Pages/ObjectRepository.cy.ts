import * as allure from "allure-js-commons";

export class indexPageRepository{
    indexPage = 'https://parabank.parasoft.com/parabank/index.htm'
    registerLink = "/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/p[2]/a[1]";
    usernameField1 = "/html/body/div[1]/div[3]/div[1]/div/form/div[1]/input";
    passwordField1 = "/html/body/div[1]/div[3]/div[1]/div/form/div[2]/input";
    loginButton = "/html/body/div[1]/div[3]/div[1]/div/form/div[3]/input";
    forgotLoginInfoLink = "/html/body/div[1]/div[3]/div[1]/div/p[1]/a";
    latestNewsLink1 = "/html/body/div[1]/div[3]/div[2]/ul[3]/li[2]/a";
    latestNewsLink2 = "/html/body/div[1]/div[3]/div[2]/ul[3]/li[3]/a";
    latestNewsLink3 = "/html/body/div[1]/div[3]/div[2]/ul[3]/li[4]/a";
    latestNewsReadMoreLink = "/html/body/div[1]/div[3]/div[2]/p[2]/a";
    
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
    welcomeMessage = "/html/body/div[1]/div[3]/div[1]/p/b";
    logoutButton = "/html/body/div[1]/div[3]/div[1]/ul/li[8]/a";
    errorMessage = "/html/body/div[1]/div[3]/div[2]/p";
    custLookupTitle = "/html/body/div[1]/div[3]/div[2]/h1";
    registerPageTitle = "/html/body/div[1]/div[3]/div[2]/h1";
    newsPageTitle = "/html/body/div[1]/div[3]/div[2]/h1";
}

export class openaccountPageRepository{
    openNewAccountLink = "/html/body/div[1]/div[3]/div[1]/ul/li[1]/a"
    accountOverviewLink = "/html/body/div[1]/div[3]/div[1]/ul/li[2]/a"
    checkingAccountDropdown = "/html/body/div[1]/div[3]/div[2]/div/div[1]/form/select[1]";
    fromAccountDropdown = "/html/body/div[1]/div[3]/div[2]/div/div[1]/form/select[2]";
    openNewAccountButton = "/html/body/div[1]/div[3]/div[2]/div/div[1]/form/div/input";
    accountOpenedTitle = "/html/body/div[1]/div[3]/div[2]/div/div[2]/h1";
    newAccNumberLink = "/html/body/div[1]/div[3]/div[2]/div/div[2]/p[2]/a"
    accountOverviewTable = "/html/body/div[1]/div[3]/div[2]/div/div[1]/table"
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