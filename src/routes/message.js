import express from 'express'

import { receiveMessage, sendMessage } from '~/controllers/message'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await receiveMessage(req.body.message)

    res.status(200).send({
      message: 'messages received',
      statusText: 'OK'
    })
  } catch (error) {
    console.log('erro rota', error)
    res.status(500).send({ error: 'some error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const messageId = await sendMessage(req.body.message)
    res.status(201).send({ messageId, statusText: 'Created' })
  } catch (error) {
    console.log('erro rota', error)
    res.status(500).send()
  }
})

export default router
