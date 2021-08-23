import express from 'express'

import { receiveMessage, sendMessage } from '~/controllers/message'
import { HttpCreated, HttpOK } from '~/http-responses/20X'
import { MissingParamError } from '~/http-responses/40X'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const messageIdsReceived = await receiveMessage()

    const httpResponse = new HttpOK({ messageIdsReceived })
    return res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { message } = req.body
    if (!message) throw new MissingParamError('message')

    const messageId = await sendMessage(req.body.message)

    const httpResponse = new HttpCreated({ messageId })
    return res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next(error)
  }
})

export default router
