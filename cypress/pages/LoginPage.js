class LoginPage {

    visit() {
        cy.visit('/login')
    }

    login(email, password) {
        cy.get('[data-testid="email"]')
            .should('be.visible')
            .clear()
            .type(email)

        cy.get('[data-testid="senha"]')
            .should('be.visible')
            .clear()
            .type(password)

        cy.get('[data-testid="entrar"]')
            .should('be.enabled')
            .click()
    }
}

export default new LoginPage()