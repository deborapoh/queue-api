import supertest from 'supertest'

import api from '../../src/app'

const request = supertest(api)

describe('HOME', () => {
  console.log = jest.fn(() => { })

  it('Should be online', async () => {
    const response = await request.get('/').send()

    expect(response.status).toBe(200)
    expect(response.body.content.message).toBe('We are online people!')
  })
})
