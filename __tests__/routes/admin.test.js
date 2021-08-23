import supertest from 'supertest'

import api from '../../src/app'

const request = supertest(api)

describe('QUEUE ADMIN', () => {
  console.log = jest.fn(() => { })

  it('Should create a queue', async () => {
    const queueName = `queueTestName${Math.floor(Math.random() * 10000)}.fifo`
    const response = await request.post('/admin/create-queue').send({ queueName })

    expect(response.status).toBe(201)
    expect(response.body.statusText).toBe('Created')
    expect(response.body.content.queueUrl).toBeTruthy()
  })
})
