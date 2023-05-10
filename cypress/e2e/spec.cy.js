describe('Test Create/Read/Delete Images', () => {
	let initialImageCount;
	beforeEach(() => {
		cy.visit('localhost:3000');
		cy.getImages().then((images) => {
			initialImageCount = images.length;
		});
	});

	it('should create an image', () => {
		cy.getImages().should('have.length', initialImageCount);
		cy.get('[data-testid="addPhotoButton"]').click();
		cy.get('[data-testid="labelTextField"]').type('Candle');
		cy.get('[data-testid="photoUrlTextField"]').type(
			'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62'
		);
		cy.get('[data-testid="submitFormDialog"]').click();
		cy.getImages().should('have.length', initialImageCount + 1);
	});

	it('should delete an image', () => {
		cy.getImages().should('have.length', initialImageCount);
		cy.get('[data-testid="deletePhotoButton#2"]').click();
		cy.get('[data-testid="submitDeleteFormDialog"]').click();
		cy.getImages().should('have.length', initialImageCount - 1);
	});

	it('should search images', () => {
		cy.get('[data-testid="searchInput"]').type('kitchen');
		cy.getImages().should('have.length', 1);
	});
});
