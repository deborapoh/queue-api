import express from 'express'

const router = express.Router()

router.get('/healthcheck', async (req, res) => {
  try {
    res.status(200).send({ status: 'OK' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

export default router
