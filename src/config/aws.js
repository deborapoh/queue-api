import AWS from 'aws-sdk'

import { AWS_CREDENTIALS } from '~/config/constants'

AWS.config.credentials = new AWS.Credentials(AWS_CREDENTIALS)
AWS.config.update({ region: 'us-east-2' })

export const sqs = new AWS.SQS({ apiVersion: '2021-08-22' })
