const API_URL = 'https://serverest.dev'

export function createUser(email, password) {
  return cy.request({
    method: 'POST',
    url: `${API_URL}/usuarios`,
    body: {
      nome: 'QA User',
      email,
      password,
      administrador: 'false'
    }
  })
}

export function loginApi(email, password) {
  return cy.request({
    method: 'POST',
    url: `${API_URL}/login`,
    body: {
      email,
      password
    }
  })
}