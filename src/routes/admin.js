import express from 'express'

import { createQueue, getQueueUrl } from '~/controllers/queue-admin'

const router = express.Router()

router.post('/create-queue', async (req, res) => {
  try {
    const { queueName } = req.body
    let queueUrl = await getQueueUrl(queueName)

    if (queueUrl) {
      return res.status(200).send({ queueUrl, statusText: 'OK' })
    }

    queueUrl = await createQueue(queueName)

    res.status(201).send({ queueUrl, statusText: 'Created' })
  } catch (error) {
    console.log('error', error)
    res.status(500).send({ error: 'some error' })
  }
})

export default router
