import express from 'express'

import { HttpOK } from '~/http-responses/20X'

const router = express.Router()

router.get('/healthcheck', async (req, res, next) => {
  try {
    const httpResponse = new HttpOK()
    res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next()
  }
})

export default router
