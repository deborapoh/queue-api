import express from 'express'

import { HttpOK } from '~/http-responses/20X'
import queueAdmin from '~/routes/admin'
import check from '~/routes/check'
import message from '~/routes/message'

const router = express.Router()

// ROUTES
router.use('/', check)
router.use('/message', message)
router.use('/admin', queueAdmin)

router.get('/', async (req, res, next) => {
  try {
    const httpResponse = new HttpOK({ message: 'We are online people!' })
    return res.status(httpResponse.statusCode).send(httpResponse)
  } catch (error) {
    next()
  }
})

export default router
