import { createUser, loginApi } from '../../support/api/users'

describe('API - Login', () => {

  it('should login successfully', () => {

    const email = `test${Date.now()}@qa.com`
    const password = 'a1b2c3'

    createUser(email, password).then((res) => {
      expect(res.status).to.eq(201)

      loginApi(email, password).then((loginRes) => {
        expect(loginRes.status).to.eq(200)
        expect(loginRes.body).to.have.property('authorization')
      })

    })

  })

})