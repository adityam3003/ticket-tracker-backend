const request = require('supertest')
const app = require('../app')
const axios = require('axios')
test('Should get task for user 1', async () => {
    const response = await request(app)
        .get('/gettickets')
        .send()
        .expect(200)
    console.log(response)
})