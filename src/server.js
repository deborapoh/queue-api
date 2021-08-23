import app from '~/app'
import constants from '~/config/constants'

const { GENERAL: { API_PORT } } = constants

app.listen(API_PORT, () => {
  console.log(`App serving on port ${API_PORT}...`)
})
