import { sqs } from '~/config/aws'
import constants from '~/config/constants'

export const deleteMessage = async receiptHandle => {
  try {
    const data = await sqs.deleteMessage({
      QueueUrl: constants.QUEUE.url,
      ReceiptHandle: receiptHandle
    }).promise()

    console.log('data deleted', data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const receiveMessage = async () => {
  try {
    const data = await sqs.receiveMessage({ QueueUrl: constants.QUEUE.url, MaxNumberOfMessages: 10 }).promise()
    console.log('messages received', data)

    const messagesToBeDeleted = data.Messages.map(message => message.ReceiptHandle)
    console.log('messagesToBeDeleted', messagesToBeDeleted)

    messagesToBeDeleted.forEach(receiptHandle => deleteMessage(receiptHandle))
  } catch (error) {
    throw new Error(error)
  }
}

export const sendMessage = async message => {
  try {
    const { QUEUE: { url, messageGroupId } } = constants

    const { MessageId } = await sqs.sendMessage({
      MessageBody: message,
      QueueUrl: url,
      MessageGroupId: messageGroupId,
      MessageDeduplicationId: 'testMessageDeduplicationId'
    }).promise()

    return MessageId
  } catch (error) {
    throw new Error(error)
  }
}
