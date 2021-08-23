import { sqs } from '~/config/aws'
import constants from '~/config/constants'

export const deleteMessage = async receiptHandle => {
  try {
    const data = await sqs.deleteMessage({
      QueueUrl: constants.QUEUE.url,
      ReceiptHandle: receiptHandle
    }).promise()

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const receiveMessage = async () => {
  try {
    const { QUEUE: { url, maxNumberOfMessages } } = constants

    const data = await sqs.receiveMessage({
      QueueUrl: url,
      MaxNumberOfMessages: maxNumberOfMessages
    }).promise()

    const messageIdsReceived = data.Messages
      ? data.Messages.map(message => {
          deleteMessage(message.ReceiptHandle)
          return {
            messageId: message.MessageId,
            body: message.Body
          }
        })
      : []

    return messageIdsReceived
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
      MessageGroupId: messageGroupId
    }).promise()

    return MessageId
  } catch (error) {
    throw new Error(error)
  }
}
