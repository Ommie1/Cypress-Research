/// <reference types="cypress" />

// Cypress supports css selector only
// Cypress by default handles asycronous behavior 
// Promise state/behaviour (pending, resolved, rejected)
// .then method will wait until method gets resolved

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
  
    it('handling parent child element', () => {
        cy.wait(2000)
        cy.get(".products").find(".product").should("have.length",30)
        // Click 3rd product, eq commmad starts with 0 index
        cy.get(".products").find(".product").eq(2).contains('ADD TO CART').click()     
    })

    it('handling element by text', () => {
        
        cy.get(".products").find(".product").each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Brocolli'))
            {
                console.log($el)
                cy.wrap($el).find('button').click()
            }
        })     
    })

    it('handling asyncronous behavior', () => {
        // Cypress by default handles asycronous behavior     
    })
  })
  