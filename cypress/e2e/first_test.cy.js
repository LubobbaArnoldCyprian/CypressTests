///<reference types ="cypress" />

describe('test suite', function(){

    it('google test', function(){

        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('youtube.com').type(('{enter}'))
    })

})



