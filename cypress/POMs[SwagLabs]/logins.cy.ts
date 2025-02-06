export class ref1 {

    loginPage(username, password) {
        if (username != null && password != null) {
            cy.xpath("//input[@id='user-name']").type(username);
            cy.xpath("//input[@id='password']").type(password);
            cy.xpath("//input[@id='login-button']").click();
        }
        else if (username == null && password != null) {
            cy.xpath("//input[@id='password']").type(password);
            cy.xpath("//input[@id='login-button']").click();
        }
        else if (password == null && username != null) {
            cy.xpath("//input[@id='user-name']").type(username);
            cy.xpath("//input[@id='login-button']").click();
        }
        else
            cy.xpath("//input[@id='login-button']").click();
    }

    singleLogin() {
        cy.visit('https://www.saucedemo.com/');
        cy.xpath("//input[@id='user-name']").type('standard_user');
        cy.xpath("//input[@id='password']").type('secret_sauce');
        cy.xpath("//input[@id='login-button']").click();
    }

    visualErrorLogin() {
        cy.visit('https://www.saucedemo.com/');
        cy.xpath("//input[@id='user-name']").type('visual_user');
        cy.xpath("//input[@id='password']").type('secret_sauce');
        cy.xpath("//input[@id='login-button']").click();
    }


}
  