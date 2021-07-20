 describe('MISMO AUTOMATION TEST', function () {
  it('Login validation', function () {

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.get('#txtUsername').click()
    .type('Admin')

    cy.get('#txtPassword').click()
    .type('admin123')

    cy.get('#btnLogin').click()

    cy.get('#welcome')
    .invoke('text')
    .should('match', /^Welcome/)
    cy.contains('#welcome', /^Welcome/)
  })

  it('Logout Validation', function () {

    cy.get('#welcome').click() 
    cy.get('#welcome-menu').contains('Logout').click()
    
    cy.get('#logInPanelHeading')
    .invoke('text')
    .should('match', /^LOGIN Panel/)
    cy.contains('#logInPanelHeading', /^LOGIN/)

  })

 })  