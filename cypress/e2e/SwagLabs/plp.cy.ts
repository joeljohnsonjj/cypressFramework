import { ref1 } from '../../POMs[SwagLabs]/logins.cy';
import { productListingPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import { loginPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import * as allure from "allure-js-commons";

const obj1 = new ref1();
const obj2 = new productListingPageRepository();
const obj3 = new loginPageRepository();

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
        cy.xpath(obj2.cartButton).should('exist');
        cy.xpath(obj2.productSort).should('exist');
        cy.xpath(obj2.burgerMenu).should('exist');
        cy.xpath(obj2.productsTitle).should('contain.text', 'Products');
    });

    it('BasicAddtoCart', () => {
        allure.description("This test adds an item to the cart.");
        allure.displayName("Add to Cart");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Add to Cart");
        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.cartButton).click();
        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
    });

    it('BasicRemovefromCart', () => {
        allure.description("This test removes an item from the cart.");
        allure.displayName("Remove from Cart");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Remove from Cart");
        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.cartButton).click();
        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.xpath(obj2.removeBackpack).click();
        cy.xpath(obj2.inventoryBackpack).should('not.exist');
        cy.screenshot();
    });

    it('BasicAddtoCart2', () => {
        allure.description("This test adds 2 items to the cart.");
        allure.displayName("Add to Cart - 2 items");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Add to Cart - 2 items");

        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.addBikeLight).click();
        cy.xpath(obj2.cartButton).click();

        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
        cy.xpath(obj2.inventoryBikeLight).should('contain.text', 'Sauce Labs Bike Light');
        cy.screenshot();
    });

    it('Check Socials', () => {
        
        allure.description("Checks the social media links in the footer.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Check Socials");

        cy.scrollTo('bottom');
        cy.xpath(obj2.linkedinRef).click();
        cy.xpath(obj2.facebookRef).click();
        cy.xpath(obj2.twitterRef).click();
    });

    it('Check Footer Text', () => {
        
        allure.description("Checks the footer text.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Check Footer Text");

        cy.scrollTo('bottom');
        cy.xpath(obj2.footerText).should('contain.text', '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Sort - Price Low to High', () => {
        
        allure.description("Sorts the products by price low to high.");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Price Low to High");

        cy.xpath(obj2.productSort).select('lohi');
        cy.screenshot();

        let val1 : number, val2 : number;
        cy.xpath(obj2.firstitemPrice)
            .invoke('text')
            .then((text) => {
            val1 = parseFloat(text.trim().replace('$', ''));
            console.log(val1);
        });
        
        cy.xpath(obj2.seconditemPrice)
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

        cy.xpath(obj2.productSort).select('hilo');
        cy.screenshot();

        let val1 : number, val2 : number;
        cy.xpath(obj2.firstitemPrice)
            .invoke('text')
            .then((text) => {
            val1 = parseFloat(text.trim().replace('$', ''));
            console.log(val1);
        });
        
        cy.xpath(obj2.seconditemPrice)
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

        cy.xpath(obj2.productSort).select('az');
        cy.screenshot();

        let val1 : string, val2 : string;
        cy.xpath(obj2.firstitemLabel)
            .invoke('text')
            .then((text) => {
            val1 = text.trim();
            console.log(val1);
        });
        
        cy.xpath(obj2.seconditemLabel)
            .invoke('text')
            .then((text) => {
            val2 = text.trim();
            console.log(val2);
            expect(val1 < val2).to.be.true;
        });
    })

    it('Sort - Name (Z-A)', () => {
        
        allure.description("Sorts the products by name (Z-A).");
        allure.epic("Sauce Labs");
        allure.feature("PLP");
        allure.story("Sort - Name (Z-A)");

        cy.xpath(obj2.productSort).select('za');
        cy.screenshot();

        let val1 : string, val2 : string;
        cy.xpath(obj2.firstitemLabel)
            .invoke('text')
            .then((text) => {
            val1 = text.trim();
            console.log(val1);
        });
        
        cy.xpath(obj2.seconditemLabel)
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

        cy.xpath(obj2.burgerMenu).click();
        cy.xpath(obj2.LogoutButton).click();
        cy.screenshot();
        cy.xpath(obj3.loginLogo).should('exist');
    }); 

});