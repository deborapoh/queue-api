import { sqs } from '~/config/aws'

import { InvalidParamError } from '~/http-responses/40X'

export const getQueueUrl = async queueName => {
  try {
    const { QueueUrl } = await sqs.getQueueUrl({ QueueName: queueName }).promise()
    return QueueUrl
  } catch (error) {
    if (error.code !== 'AWS.SimpleQueueService.NonExistentQueue') {
      throw new Error(error.message)
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
    if (error.code === 'InvalidParameterValue') {
      throw new InvalidParamError(error.message)
    }

    throw new Error(error.message)
  }
}
