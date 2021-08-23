import { sqs } from '~/config/aws'

export const getQueueUrl = async queueName => {
  try {
    const { QueueUrl } = await sqs.getQueueUrl({ QueueName: queueName }).promise()
    return QueueUrl
  } catch (error) {
    if (error.code !== 'AWS.SimpleQueueService.NonExistentQueue') {
      throw new Error(error)
    }
  }
}

export const createQueue = async queueName => {
  try {
    const { QueueUrl } = await sqs.createQueue({
      QueueName: queueName,
      Attributes: {
        FifoQueue: 'true',
        ContentBasedDeduplication: 'true'
      }
    }).promise()

    return QueueUrl
  } catch (error) {
    throw new Error(error)
  }
}
