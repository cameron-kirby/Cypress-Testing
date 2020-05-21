// Get the Name input and type a name in it.
// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// Get the Email input and type an email address in it
// Get the password input and type a password in it
// Set up a test that will check to see if a user can check the terms of service box
// Check to see if a user can submit the form data
describe('Form Inputs', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submit button')
            .should('be.disabled')
    })

    it('Check name input', () => {
        cy.get('input[name="username"]')
            .type('Cameron')
            .should('have.value', 'Cameron')
    })

    it('Check email input', () => {
        cy.get('input[name="email"]')
            .type('cameron@lambdastudents.com')
            .should('have.value', 'cameron@lambdastudents.com')
    })

    it('Check password input', () => {
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
    })

    it('Check ToS input', () => {
        cy.get('input[name="tos"]')
            .click()
            .should('have.value', 'on')
    })

    it('Check if user can submit the form data', () => {
        cy.get('.submit button')
            .should('not.be.disabled')
    })
})

// Check for form validation if an input is left empty
describe('Form Validation: Missing Username', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submit button')
            .should('be.disabled')
    })

    it('Check missing Username', () => {
        cy.get('input[name="email"]')
            .type('cameron@lambdastudents.com')
            .should('have.value', 'cameron@lambdastudents.com')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('input[name="tos"]')
            .click()
            .should('have.value', 'on')
        cy.get('.submit button')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing Email', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submit button')
            .should('be.disabled')
    })

    it('Check missing Email', () => {
        cy.get('input[name="username"]')
            .type('Cameron')
            .should('have.value', 'Cameron')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('input[name="tos"]')
            .click()
            .should('have.value', 'on')
        cy.get('.submit button')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing Password', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submit button')
            .should('be.disabled')
    })

    it('Check missing Password ', () => {
        cy.get('input[name="username"]')
            .type('Cameron')
            .should('have.value', 'Cameron')
        cy.get('input[name="email"]')
            .type('cameron@lambdastudents.com')
            .should('have.value', 'cameron@lambdastudents.com')
        cy.get('input[name="tos"]')
            .click()
            .should('have.value', 'on')
        cy.get('.submit button')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing ToS', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submit button')
            .should('be.disabled')
    })

    it('Check missing Terms of Service input', () => {
        cy.get('input[name="username"]')
            .type('Cameron')
            .should('have.value', 'Cameron')
        cy.get('input[name="email"]')
            .type('cameron@lambdastudents.com')
            .should('have.value', 'cameron@lambdastudents.com')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('.submit button')
            .should('be.disabled')
    })
})

