import express from 'express'

const router = express.Router()

// middleware?????????
router.get('/consume', async (req, res) => {
  try {
    res.status(200).send({ msg: 'message consumed' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

router.get('/produce', async (req, res) => {
  try {
    res.status(200).send({ msg: 'message produced' })
  } catch (error) {
    res.status(500).send({ error: 'some error' })
  }
})

export default router
