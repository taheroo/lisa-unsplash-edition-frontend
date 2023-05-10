describe('Test Create/Read/Delete Images', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('Create Image', () => {
		cy.get('[data-testid="imageItem"]').should('have.length', 11);
		cy.get('[data-testid="addPhotoButton"]').click();
		cy.get('[data-testid="labelTextField"]').type('Candle');
		cy.get('[data-testid="photoUrlTextField"]').type(
			'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62'
		);
		cy.get('[data-testid="submitFormDialog"]').click();
		cy.get('[data-testid="imageItem"]').should('have.length', 12);
	});

	it('Delete Image', () => {
		cy.get('[data-testid="imageItem"]').should('have.length', 11);
		cy.get('[data-testid="deletePhotoButton#2"]').click();
		cy.get('[data-testid="submitDeleteFormDialog"]').click();
		cy.get('[data-testid="imageItem"]').should('have.length', 10);
	});

	it('Search Images', () => {
		cy.get('[data-testid="searchInput"]').type('kitchen');
		cy.get('[data-testid="imageItem"]').should('have.length', 1);
	});
});
