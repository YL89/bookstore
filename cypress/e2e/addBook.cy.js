const { $CombinedState } = require('redux');

describe('test add book function', () => {
  it('book should be added', () => {
    const name = 'book';
    const desc = 'description';
    const category = 'education';
    const price = 55.5;
    cy.visit('http://localhost:3000/');

    cy.wait(3000);

    cy.get('[data-cy="' + name + '"]').then(($CombinedState) => {
      cy.get('button[name="add-book"]').click({ force: true });

      cy.wait(100);

      cy.get('[data-cy="name"]').type(name);
      cy.get('[data-cy="desc"]').type(desc);
      cy.get('[data-cy="category"]').type(category);
      cy.get('[data-cy="price"]').type(price);
      cy.get('button[type="submit"]').click();

      cy.wait(200);

      cy.get('[data-cy="' + name + '"]').should('have.length', $CombinedState.length + 1);

      cy.get('[data-cy="' + name + '"]')
        .last()
        .children('[data-cy="book-name"]')
        .should('have.text', name);
      cy.get('[data-cy="' + name + '"]')
        .last()
        .children('[data-cy="book-desc"]')
        .should('have.text', desc);
      cy.get('[data-cy="' + name + '"]')
        .last()
        .children('[data-cy="book-category"]')
        .should('have.text', category);
      cy.get('[data-cy="' + name + '"]')
        .last()
        .children('[data-cy="book-price"]')
        .should('have.text', 'Price: ' + price);
    });
  });
});
