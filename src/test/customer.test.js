const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

jest.mock('mysql', () => {
    return {
        createConnection: jest.fn(() => {
            return {
                query: (arg1, callback) => {
                    const error = undefined
                    const result = [
                        {
                            name: 'John', add: 'Bangalore'
                        }
                    ]
                    return callback(error, result)
                },
                connect: jest.fn()
            }
        })
    }
})

it('Gets the test endpoint', async () => {
    expect.assertions(2);
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
})

it('Gets customer', async () => {
    expect.assertions(1);
    const response = await request.get('/v0.1/customers')
    console.log({res: response.body.data})
    expect(response.status).toBe(200)
    // expect(response.body).toBe(200)
    // expect(response.body.message).toBe('pass!')
})