export default {
  AWS_CREDENTIALS: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  QUEUE: {
    url: process.env.QUEUE_URL,
    messageGroupId: process.env.MESSAGE_GROUP_ID
  }
}
