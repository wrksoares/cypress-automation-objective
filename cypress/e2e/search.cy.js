import LoginPage from '../pages/LoginPage'
import { createUser } from '../support/api/users'

describe('Product Search', () => {

  let user

  before(() => {
    const email = `test${Date.now()}@qa.com`
    const password = 'a1b2c3'

    createUser(email, password).then((res) => {
      expect(res.status).to.eq(201)
      user = { email, password }
    })
  })

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login(user.email, user.password)

    cy.url().should('include', '/home')
  })

  it('should return relevant products when searching', () => {

    cy.get('[data-testid="pesquisar"]')
      .should('be.visible')
      .clear()
      .type('logitech')

    cy.get('[data-testid="botaoPesquisar"]')
      .click()

    
    cy.get('.card-title')
      .should('contain.text', 'Logitech MX Vertical')

  })

})