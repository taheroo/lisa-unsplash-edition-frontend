Cypress.Commands.add('getImages', () => {
	return cy.get('[data-testid="imageItem"]');
});
