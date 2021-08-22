import express from 'express'

const router = express.Router()

// middleware?????????
router.get('/healthcheck', async (req, res) => {
  try {
    res.status(200).send({ status: 'OK' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

router.get('/', async (req, res) => {
  try {
    res.status(200).send({ msg: 'We are online people!' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

export default router
