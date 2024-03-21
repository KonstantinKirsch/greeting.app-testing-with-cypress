describe('Greeting App', () => {
    it('should display a greeting message after submitting a name', () => {
        const name = 'John Doe';
        // Type a name in the input field
        cy.get('#nameInput').type(name);
        // Click the submit button
        cy.get('button').click();
        // Verify that the greeting message is displayed
        cy.get('#greetingMessage').should('have.text', `Hello, ${name}!`);
    });
});
/* global cy */

describe('Die Startseite', () => {
    it('wird erfolgreich geladen', () => {
        cy.visit('/greeting.html')
    })
})

describe('Greeting App', () => {
    it('should display a greeting message after submitting a name', () => {
        const name = 'John Doe';
        // Type a name in the input field
        cy.get('#nameInput').type(name);
        // Click the submit button
        cy.get('button').click();
        // Verify that the greeting message is displayed
        cy.get('#greetingMessage').should('have.text', `Hello, ${name}!`);
    });
});