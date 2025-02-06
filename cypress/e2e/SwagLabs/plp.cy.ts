import { ref1 } from '../../POMs[SwagLabs]/logins.cy';
import * as allure from "allure-js-commons";

const obj1 = new ref1();

describe('Product Listing Page', () => {

    beforeEach(() => {
        obj1.singleLogin();
    });

    it('CheckInterface', () => {
        allure.description("This test checks the interface of the website.");
        allure.displayName("Interface Check");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Interface Check");
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]").should('exist');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]").should('exist');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]").should('exist');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").should('exist');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/span[1]").should('contain.text', 'Products');
    });

    it('BasicAddtoCart', () => {
        allure.description("This test adds an item to the cart.");
        allure.displayName("Add to Cart");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Add to Cart");
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.xpath("//div[@class='inventory_item_name']").should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
    });

    it('BasicRemovefromCart', () => {
        allure.description("This test removes an item from the cart.");
        allure.displayName("Remove from Cart");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Remove from Cart");
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.xpath("//div[@class='inventory_item_name']").should('contain.text', 'Sauce Labs Backpack');
        cy.xpath("//button[@id='remove-sauce-labs-backpack']").click();
        cy.xpath("//div[@class='inventory_item_name']").should('not.exist');
        cy.screenshot();
    });

    it('BasicAddtoCart2', () => {
        allure.description("This test adds 2 items to the cart.");
        allure.displayName("Add to Cart - 2 items");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Add to Cart - 2 items");

        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/button[1]").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();

        cy.xpath("//div[@class='inventory_item_name']").should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/a[1]/div[1]").should('contain.text', 'Sauce Labs Bike Light');
        cy.screenshot();
    });

    it('Check Socials', () => {
        
        allure.description("Checks the social media links in the footer.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Check Socials");

        cy.scrollTo('bottom');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[3]/a[1]").click();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[2]/a[1]").click();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/footer[1]/ul[1]/li[1]/a[1]").click();
    });

    it('Check Footer Text', () => {
        
        allure.description("Checks the footer text.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Check Footer Text");

        cy.scrollTo('bottom');
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/footer[1]/div[1]").should('contain.text', '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Sort - Price Low to High', () => {
        
        allure.description("Sorts the products by price low to high.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Price Low to High");

        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]").select('lohi');
        cy.screenshot();

        let val1 : number, val2 : number;
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]")
            .invoke('text')
            .then((text) => {
            val1 = parseFloat(text.trim().replace('$', ''));
            console.log(val1);
        });
        
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]")
            .invoke('text')
            .then((text) => {
            val2 = parseFloat(text.trim().replace('$', ''));
            console.log(val2);
            expect(val1).to.be.lte(val2);
        });
    });

    it('Sort - Price High to Low', () => {
        
        allure.description("Sorts the products by price high to low.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Price High to Low");

        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]").select('hilo');
        cy.screenshot();

        let val1 : number, val2 : number;
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]")
            .invoke('text')
            .then((text) => {
            val1 = parseFloat(text.trim().replace('$', ''));
            console.log(val1);
        });
        
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]")
            .invoke('text')
            .then((text) => {
            val2 = parseFloat(text.trim().replace('$', ''));
            console.log(val2);
            expect(val1).to.be.gte(val2);
        });
    });

    it('Sort - Name (A-Z)', () => {
        
        allure.description("Sorts the products by name (A-Z).");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Name (A-Z)");

        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]").select('az');
        cy.screenshot();

        let val1 : string, val2 : string;
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]")
            .invoke('text')
            .then((text) => {
            val1 = text.trim();
            console.log(val1);
        });
        
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/a[1]/div[1]")
            .invoke('text')
            .then((text) => {
            val2 = text.trim();
            console.log(val2);
            expect(val1 < val2).to.be.true;
        });
    });

    it('Sort - Name (Z-A)', () => {
        
        allure.description("Sorts the products by name (Z-A).");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Name (Z-A)");

        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/select[1]").select('za');
        cy.screenshot();

        let val1 : string, val2 : string;
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]")
            .invoke('text')
            .then((text) => {
            val1 = text.trim();
            console.log(val1);
        });
        
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/a[1]/div[1]")
            .invoke('text')
            .then((text) => {
            val2 = text.trim();
            console.log(val2);
            expect(val1 > val2).to.be.true;
        });
    });

    it('Hamburger Menu - Log Out', () => {
        
        allure.description("Logs out of the website.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Logout");

        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").click();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/a[3]").click();
        cy.screenshot();
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]").should('exist');
    }); 

});