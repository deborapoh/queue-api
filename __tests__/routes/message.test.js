import supertest from 'supertest'

import api from '../../src/app'

const request = supertest(api)

describe('QUEUE MESSAGING', () => {
  console.log = jest.fn(() => { })

  it('Should produce a message', async () => {
    const response = await request.post('/message').send({ message: 'testing 1' })

    expect(response.status).toBe(201)
    expect(response.body.statusText).toBe('Created')
    expect(response.body.content.messageId).toBeTruthy()
  })

  it('Should receive messages', async () => {
    const response = await request.get('/message').send()

    expect(response.status).toBe(200)
    expect(response.body.statusText).toBe('OK')
    expect(response.body.content.messageIdsReceived).toBeTruthy()
  })
})
