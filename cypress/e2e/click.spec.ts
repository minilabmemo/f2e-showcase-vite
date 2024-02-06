// https://on.cypress.io/api

describe('User click Test', () => {
  it('visits the meow root url', () => {
    cy.visit('/meow/')
    cy.contains('li', '關於薩卡')
  })
  it('click nav', () => {
    cy.visit('/meow/')
    cy.contains('a', '關於薩卡').click();
    cy.url().should('eq', 'http://localhost:4173/meow/#about');
  })
  it('click about modal and close', () => {
    cy.visit('/meow/')
    cy.get('#about').click();
    cy.get('h1').should('contain', '薩卡的主張'); 
    cy.get('img[alt="close"]').click();
    cy.get('h1').should('not.contain', '薩卡的主張');

  })
  it('click news modal and close', () => {
    cy.visit('/meow/')
    cy.contains('button', '暸解更多').should('be.visible').scrollIntoView();
    cy.contains('button', '暸解更多').click();
    cy.get('#newsModal').should('be.visible'); 
    cy.get('img[alt="close"]').click();
    cy.get('#newsModal').should('not.exist'); 

  })
})
