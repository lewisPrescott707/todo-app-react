describe('empty spec', () => {
  beforeEach(() => {
  cy.eyesOpen({
        appName: 'your-project-name',                
        testName: Cypress.currentTest.title,
    })
  })
  afterEach(() => {    
    cy.eyesClose()
  })
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="todo-input"]').type('one')

    cy.get('[data-testid="todo-input"]').should('have.value', 'one')
  })
})