class LoginPage {

    visit() {
        cy.visit('https://front.serverest.dev/login')
    }

    login(email, password) {

        cy.get('[data-testid="email"]').type(email)

        cy.get('[data-testid="senha"]').type(password)

        cy.get('[data-testid="entrar"]').click()

    }

}

export default new LoginPage()