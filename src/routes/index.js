import express from 'express'

import check from '~/routes/check'
import message from '~/routes/message'
import queueAdmin from '~/routes/admin'

const router = express.Router()

// ROUTES
router.use('/', check)
router.use('/message', message)
router.use('/admin', queueAdmin)

export default router
