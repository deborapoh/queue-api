import express from 'express'

import { createQueue, getQueueUrl } from '~/controllers/queue-admin'
import { HttpCreated, HttpOK } from '~/http-responses/20X'
import { MissingParamError } from '~/http-responses/40X'

const router = express.Router()

router.post('/create-queue', async (req, res, next) => {
  try {
    let httpResponse
    const { queueName } = req.body

    if (!queueName) throw new MissingParamError('queueName')

    let queueUrl = await getQueueUrl(queueName)

    if (queueUrl) {
      httpResponse = new HttpOK({ queueUrl })
      return res.status(httpResponse.statusCode).send(httpResponse)
    }

    queueUrl = await createQueue(queueName)

    httpResponse = new HttpCreated({ queueUrl })
    return res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

export default router
