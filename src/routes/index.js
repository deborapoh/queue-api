import express from 'express'

import check from '~/routes/check'
import message from '~/routes/message'

const router = express.Router()

// ROUTES
router.use('/', check)
router.use('/message', message)

export default router
