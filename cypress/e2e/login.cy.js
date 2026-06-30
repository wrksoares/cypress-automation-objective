import LoginPage from '../pages/LoginPage'

describe('Login', () => {

    beforeEach(() => {
        LoginPage.visit()
    })

    it('allow a registered user to log in successfully', () => {

        cy.fixture('user').then((user) => {

            LoginPage.login(user.email, user.password)

        })

        // user is redirected to home page
        cy.url().should('include', '/home')

        // headers is shown
        cy.contains('Carrinho').should('be.visible')
        cy.contains('Logout').should('be.visible')

        // verify input is available
        cy.get('[data-testid="pesquisar"]')
            .should('be.visible')

    })

})