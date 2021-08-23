import { sqs } from '~/config/aws'
import { QUEUE_URL } from '~/config/constants'

export const deleteMessage = async receiptHandle => {
  try {
    const data = await sqs.deleteMessage({
      QueueUrl: QUEUE_URL,
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
    const data = await sqs.receiveMessage({ QueueUrl: QUEUE_URL, MaxNumberOfMessages: 10 }).promise()
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
    const { MessageId } = await sqs.sendMessage({
      MessageBody: message,
      QueueUrl: QUEUE_URL,
      MessageGroupId: 'testGroupId',
      MessageDeduplicationId: 'testMessageDeduplicationId'
    }).promise()

    return MessageId
  } catch (error) {
    throw new Error(error)
  }
}
