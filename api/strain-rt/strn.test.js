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

const strains = require("./strn-hlpr");

let token;
const user = { username: "Testing", password: "******" };
beforeAll(done => {
  request(server)
    .post("/api/auth/register")
    .send({ ...user})
    .then(res => {
      request(server)
        .post("/api/auth/login")
        .send(user)
        .end((err, response) => {
          token = response.body.token; // save the token!
          done();
        });
    });
});

describe("strains", () => {
  beforeEach(async () => {
    await db("strains").truncate();
  });

  describe("GET /strains", () => {
    it("should return status 200", () => {
      return request(server)
        .get("/strains")
        .set("authorization", `${token}`)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return a list of strains", async () => {
      await strains.add({strain_name: 'Chocolate-Chunk', strain_type: 'indica', effects: 'calming, happy', flavor: 'sweet, fruity, '}
      );
      const res = await request(server)
        .get("/api/strains")
        .set("authorization", `${token}`);

      expect(res.body.length).toBeGreaterThan(1);
    
    });
  });

  describe("POST /api/strains", () => {
    it("should return status 201", () => {
      return request(server)
        .post("/api/strains")
        .set("authorization", `${token}`)
        .send({ location: "Bali" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should add Chunk as a strain", () => {
      return request(server)
        .post("/locations")
        .set("authorization", `${token}`)
        .send({strain_name: 'Chunk', strain_type: 'indica', effects: 'calming, happy', flavor: 'sweet, fruity, '})
        .then(res => {
          expect(res.body.strains).toBe("Chunk");
        });
    });
  });

  describe("DELETE /api/strains", () => {
    it("should return status 200", async () => {
      const res = await request(server)
        .post("/api/strains")
        .set("authorization", `${token}`)
        .send({strain_name: 'Chunk', strain_type: 'indica', effects: 'calming, happy', flavor: 'sweet, fruity, '});

      expect(res.body.id).toBe(1);

      const deleted = await request(server)
        .delete(`/api/strains, ${res.body.id}`)
        .set("authorization", `${token}`);

      expect(deleted.body.strains).toBe(undefined);
      expect(deleted.status).toBe(200);
    });
  });
});