describe("GET /recommends", () => {
    it('should return all recommended strains status 200', () => {
        return request(server)
        .get('/reccomends')
        .set('authorization', `${token}`)
        .then(res => {
            expect(res.status).toBe(200)
        })
    
    })
})