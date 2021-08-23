import express from 'express'

import check from '~/routes/check'
import message from '~/routes/message'
import queueAdmin from '~/routes/admin'

const router = express.Router()

// ROUTES
router.use('/', check)
router.use('/message', message)
router.use('/admin', queueAdmin)

router.get('/', async (req, res) => {
  try {
    res.status(200).send({ msg: 'We are online people!' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

export default router
