import { logins } from '../../POMs[SwagLabs]/loginPagePOM.cy';
import { productListingPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import { loginPageRepository } from '../../POMs[SwagLabs]/ObjectRepository.cy';
import * as allure from "allure-js-commons";
import { allureReporting } from '../../POMs[SwagLabs]/ObjectRepository.cy';

const obj1 = new logins();
const obj2 = new productListingPageRepository();
const obj3 = new loginPageRepository();
const allu = new allureReporting();

describe('Product Listing Page', () => {

    beforeEach(() => {
        obj1.singleLogin();
    });

    it('CheckInterface', () => {
        allu.sendValues("This test checks the interface of the website", "Interface Check", "Normal", "Sauce Labs", "PLP", "Interface Check");
        cy.xpath(obj2.cartButton).should('exist');
        cy.xpath(obj2.productSort).should('exist');
        cy.xpath(obj2.burgerMenu).should('exist');
        cy.xpath(obj2.productsTitle).should('contain.text', 'Products');
    });

    it('BasicAddtoCart', () => {
        allu.sendValues("This test adds an item to the cart", "Add to Cart", "Critical", "Sauce Labs", "PLP", "Add to Cart");
        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.cartButton).click();
        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
    });

    it('BasicRemovefromCart', () => {
        allu.sendValues("This test removes an item from the cart", "Remove from Cart", "Minor", "Sauce Labs", "PLP", "Remove from Cart");
        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.cartButton).click();
        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.xpath(obj2.removeBackpack).click();
        cy.xpath(obj2.inventoryBackpack).should('not.exist');
        cy.screenshot();
    });

    it('BasicAddtoCart2', () => {
        allu.sendValues("This test adds 2 items to the cart", "Add to Cart - 2 items", "Minor", "Sauce Labs", "PLP", "Add to Cart - 2 items");
        cy.xpath(obj2.addBackpack).click();
        cy.xpath(obj2.addBikeLight).click();
        cy.xpath(obj2.cartButton).click();

        cy.xpath(obj2.inventoryBackpack).should('contain.text', 'Sauce Labs Backpack');
        cy.screenshot();
        cy.xpath(obj2.inventoryBikeLight).should('contain.text', 'Sauce Labs Bike Light');
        cy.screenshot();
    });

    it('Check Socials', () => {
        allu.sendValues("This test checks the social media links in the footer", "Social Media Links", "Normal", "Sauce Labs", "PLP", "Check Socials");
        cy.scrollTo('bottom');
        cy.xpath(obj2.linkedinRef).click();
        cy.xpath(obj2.facebookRef).click();
        cy.xpath(obj2.twitterRef).click();
    });

    it('Check Footer Text', () => {
        allu.sendValues("This test checks the footer text", "Footer Text", "Minor", "Sauce Labs", "PLP", "Check Footer Text");
        cy.scrollTo('bottom');
        cy.xpath(obj2.footerText).should('contain.text', '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });

    it('Sort - Price Low to High', () => {
        allu.sendValues("This test sorts the products by price low to high", "Sort - Price Low to High", "Normal", "Sauce Labs", "PLP", "Sort - Price Low to High");
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
        allu.sendValues("This test sorts the products by price high to low", "Sort - Price High to Low", "Normal", "Sauce Labs", "PLP", "Sort - Price High to Low");
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
        allu.sendValues("This test sorts the products by name A-Z", "Sort - Name (A-Z)", "Normal", "Sauce Labs", "PLP", "Sort - Name (A-Z)");
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
        allu.sendValues("This test sorts the products by name Z-A", "Sort - Name (Z-A)", "Normal", "Sauce Labs", "PLP", "Sort - Name (Z-A)");
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
        allu.sendValues("This test logs out of the website", "Logout", "Critical", "Sauce Labs", "PLP", "Logout");
        cy.xpath(obj2.burgerMenu).click();
        cy.xpath(obj2.LogoutButton).click();
        cy.screenshot();
        cy.xpath(obj3.loginLogo).should('exist');
    }); 

});