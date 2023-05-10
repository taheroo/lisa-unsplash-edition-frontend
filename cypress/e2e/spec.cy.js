describe('Test Create/Read/Delete Images', () => {
	it('Create Image', () => {
		cy.visit('localhost:3000');
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
		cy.visit('localhost:3000');
		cy.get('[data-testid="imageItem"]').should('have.length', 11);
		cy.get('[data-testid="deletePhotoButton#2"]').click();
		cy.get('[data-testid="submitDeleteFormDialog"]').click();
		cy.get('[data-testid="imageItem"]').should('have.length', 10);
	});
});
