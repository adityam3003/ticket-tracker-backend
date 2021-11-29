const supertest = require('supertest')
const app = require('../app')
jest.useFakeTimers()
const moxios = require('moxios')
const {mockRequestJSON,expectedResponse} = require('./fixtures/test.json')
const request = supertest(app)
beforeAll(() => {
    moxios.install();
});
test('Check API Response', async () => {
    moxios.stubRequest(`https://zendeskcodingchallenge1566.zendesk.com/api/v2/tickets.json?per_page=25&page=1`, {
        status: 200,
        response: mockRequestJSON,
        headers: {
            authorization: 'Basic bWVodGFhZGlAdXNjLmVkdTpJYnNheWFAMzAwMzE5OTg='
        }
    })
    
    request.get('/gettickets').end((err,res)=>{
        expect(res.body.tickets).toStrictEqual(expectedResponse.tickets)
    })
})