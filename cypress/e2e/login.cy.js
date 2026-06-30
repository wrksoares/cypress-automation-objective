import LoginPage from '../pages/LoginPage'
import { createUser } from '../support/api/users'

describe('Login', () => {

  let user

  before(() => {
    const email = `test${Date.now()}@qa.com`
    const password = 'a1b2c3'

    createUser(email, password).then((res) => {
      expect([201, 400]).to.include(res.status)
      user = { email, password }
    })
  })

  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login successfully', () => {
    LoginPage.login(user.email, user.password)

    cy.url().should('include', '/home')
    cy.contains('Carrinho').should('be.visible')
  })

})