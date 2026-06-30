describe('API - Products', () => {

  it('should return product list', () => {

    cy.request('https://serverest.dev/produtos')
      .then((res) => {

        expect(res.status).to.eq(200)
        expect(res.body.produtos).to.be.an('array')
        expect(res.body.quantidade).to.be.greaterThan(0)

      })

  })

})