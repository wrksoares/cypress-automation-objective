import { createUser } from '../../support/api/users'

describe('API - Create User', () => {

  it('should create user successfully', () => {

    const email = `test${Date.now()}@qa.com`

    createUser(email, 'a1b2c3').then((res) => {

      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('_id')
      expect(res.body.message).to.include('Cadastro realizado')

    })

  })

})