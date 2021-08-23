export default {
  GENERAL: {
    API_PORT: process.env.API_PORT
  },
  AWS_CREDENTIALS: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  QUEUE: {
    url: process.env.QUEUE_URL,
    messageGroupId: process.env.MESSAGE_GROUP_ID,
    maxNumberOfMessages: process.env.MAX_NUMBER_OF_MESSAGES
  }
}
