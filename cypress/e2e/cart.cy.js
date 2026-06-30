import LoginPage from '../pages/LoginPage'
import { createUser } from '../support/api/users'

describe('Cart Flow', () => {

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

  it('should add product to list and validate it in cart page', () => {

    cy.get('[data-testid="pesquisar"]')
      .should('be.visible')
      .clear()
      .type('logitech')

    cy.get('[data-testid="botaoPesquisar"]')
      .click()

    cy.get('.card-title')
      .should('contain.text', 'Logitech MX Vertical')

    cy.get('[data-testid="adicionarNaLista"]')
      .first()
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/minhaListaDeProdutos')

    cy.url().should('include', '/minhaListaDeProdutos')

    cy.get('[data-testid="shopping-cart-product-name"]')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Logitech MX Vertical')

  })

})