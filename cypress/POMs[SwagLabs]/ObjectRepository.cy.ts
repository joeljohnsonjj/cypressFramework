import * as allure from "allure-js-commons";

export class loginPageRepository{

    mainUrl = 'https://www.saucedemo.com/';
    loginLogo = "/html[1]/body[1]/div[1]/div[1]/div[1]";
    plpLogo = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]';
    errorPop = '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[3]/h3[1]';
    lockedUserPopupPath = "//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]";
    emptyFieldsFixture = '/SwagLabs/emptyFields.json';
    validLoginsFixture = '/SwagLabs/validTestLogins.json';
    invalidLoginsFixture = '/SwagLabs/invalidTestLogins.json';
    usernameField = "//input[@id='user-name']";
    passwordField = "//input[@id='password']";
    loginButton = "//input[@id='login-button']";

}

export class productListingPageRepository{

    plpLogo = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]';
    cartButton = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]";
    productSort = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]";
    burgerMenu = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]";
    productsTitle = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]";
    addBackpack = "//button[@id='add-to-cart-sauce-labs-backpack']";
    inventoryBackpack = "//div[@class='inventory_item_name']";
    inventoryBikeLight = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/a[1]/div[1]";
    removeBackpack = "//button[@id='remove-sauce-labs-backpack']";
    addBikeLight = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/button[1]";
    linkedinRef = "/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[3]/a[1]";
    facebookRef = "/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[2]/a[1]";
    twitterRef = "/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[1]/a[1]";
    footerText = "/html[1]/body[1]/div[1]/div[1]/footer[1]/div[1]";
    firstitemPrice = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]";
    seconditemPrice = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]";
    firstitemLabel = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]";
    seconditemLabel = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/a[1]/div[1]";
    LogoutButton = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/a[3]";
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