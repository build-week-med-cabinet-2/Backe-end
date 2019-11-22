const request = require("supertest");

const server = require("../server");
const db = require("../../database/db-config");


let token;

const user = {username: 'Testing', password:'******'}
beforeAll(done => {
    request(server)
    .post('/api/auth/register')
    .send({...user, name: 'cori' })
    .then(result => {
        request(server)
        .post('/api/auth/login')
        .send(user)
        .end((err, response) => {
            token = response.body.token
            done()
        })
    })
})

describe('recommends', () => {
    beforeEach(async () => {
        await db('recommends').truncate
    })
describe("GET /api/strains", ()=>{
    it('should return strains as a status 200', () => {
        return request(server)
        .get('/api/strains')
        .set('authorization', `${token}`)
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
})

describe("GET /api/strains/:id", () => {
    it('should return a single strain and a status 200', () => {
        return request(server)
        .get('/api/strains/:id')
        .set('authorization', `${token}`)
        .then(res => {
            expect(res.status).toBe(200)
    })
})
})
})
