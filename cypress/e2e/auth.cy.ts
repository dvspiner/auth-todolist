 describe('Authentication Flow', () => {

  it('allows a user to log in', () => {
    cy.visit('/login')
    cy.get('input[placeholder="Username"]').type('testuser')
    cy.get('input[placeholder="Password"]').type('password123')
    cy.contains('Login').click()
    cy.contains('Todo List').should('be.visible')
  })

  it('redirects unauthenticated user to login', () => {
    cy.visit('/home')
    cy.url().should('include', '/login')
  })
})