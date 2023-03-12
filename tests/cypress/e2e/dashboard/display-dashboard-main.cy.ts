describe('when the root route is visited', () => {
  it('`main` should be visible', () => {
    cy.visit('/')
    cy.get('main').should('be.visible')
  })
})
