export function createUser(email, password) {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
      nome: 'QA User',
      email: email,
      password: password,
      administrador: 'false'
    },
    failOnStatusCode: false
  })
}