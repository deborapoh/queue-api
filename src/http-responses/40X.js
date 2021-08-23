import GeneralError from '~/http-responses/GeneralError'

export class InvalidParamError extends GeneralError {
  constructor (errorMessage) {
    super()
    this.error = errorMessage
    this.statusCode = 400
    this.statusText = 'Invalid Param Error'
  }
}

export class MissingParamError extends GeneralError {
  constructor (paramName) {
    super()
    this.error = `Required parameter: ${paramName}`
    this.statusCode = 400
    this.statusText = 'Missing Param Error'
  }
}

export class NotFoundError extends GeneralError {
  constructor (errorMessage) {
    super()
    this.error = errorMessage
    this.statusCode = 404
    this.statusText = 'Not Found Error'
  }
}
