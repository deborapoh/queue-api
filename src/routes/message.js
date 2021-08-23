import express from 'express'

import { receiveMessage, sendMessage } from '~/controllers/message'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const messageIdsReceived = await receiveMessage(req.body.message)
    console.log('messageIdsReceived', messageIdsReceived)

    res.status(200).send({
      messageIdsReceived,
      statusText: 'OK'
    })
  } catch (error) {
    console.log('erro rota', error)
    res.status(500).send({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const messageId = await sendMessage(req.body.message)
    res.status(201).send({ messageId, statusText: 'Created' })
  } catch (error) {
    console.log('erro rota', error)
    res.status(500).send({ error })
  }
})

export default router
