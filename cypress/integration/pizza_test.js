describe('Test that you can add text to the box', () => {
    it('can add text to the box', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.text-inputs > :nth-child(2) > input').type('Wade Boggs')
    })
})

describe('Select multiple toppings', () => {
    it('can select multiple toppings', () => {
        cy.get('.checkbox-inputs > :nth-child(2) > input').click().check()
        cy.get('.checkbox-inputs > :nth-child(4) > input').click().check()
    })
})

describe('Submit the form', () => {
    it('can submit the form', () => {
        cy.get('button#submitBtn').click()
    })
})