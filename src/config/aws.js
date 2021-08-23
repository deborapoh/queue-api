import AWS from 'aws-sdk'

import constants from '~/config/constants'

AWS.config.credentials = new AWS.Credentials(constants.AWS_CREDENTIALS)
AWS.config.update({ region: 'us-east-2' })

export const sqs = new AWS.SQS({ apiVersion: '2021-08-22' })
