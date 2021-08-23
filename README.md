# SQS Queue API
This API is to be used as a queue producer/consumer service

---

- [Motivation](#motivation)
- [Code Style](#code-style)
- [Techs](#techs)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Tests](#tests)
- [License](#license)

# Motivation
This project was created as a test for a startup company

# Code Style

[standard](https://standardjs.com)

[eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
`extending standard`
  ```{
    "extends": [
      "standard"
    ]
  }
  ```

# Techs
- Language
    - JavaScript
- Environment
    - [NodeJS 14](https://nodejs.org/docs/v14.17.0/api)
- Frameworks
    - [ExpressJS](https://expressjs.com/pt-br/)
- Libraries
    - [npm](https://www.npmjs.com/)
    - [yarn](https://yarnpkg.com/) `(optional)`
    - Queue
        - [aws-sdk](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)
    - Configuration
        - [dotenv](https://www.npmjs.com/package/dotenv)
        - [esm](https://www.npmjs.com/package/esm)
        - [module-alias](https://www.npmjs.com/package/module-alias)


# Quick Start


### Steps
1. Clone this repository into your local machine using http or
    ssh
    ```bash
      git clone https://github.com/deborapoh/queue-api.git
    ```


2. Inside the root folder of this project, run `yarn` command to install dependencies
    ```bash
      yarn
    ```


3. Create a file called `.env` in the root of the project and copy `.env.sample`'s content.

    3.1 You will need a **AWS Account** to have a `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. If you dont't have it yet, you can create an account for free accessing [Amazon's Portal](https://portal.aws.amazon.com/billing/signup)


4. Run the project:
    ```bash
      # to run the application
      yarn serve

      # to run the application with nodemon
      yarn dev

      # to run lint and fix style issues
      yarn lint --fix
    ```

5. Use the endpoint to create a queue.

      5.1 Place your `QUEUE_URL` in your `.env` file

6. Access [AWS SQS Console](https://console.aws.amazon.com/sqs) to watch your messages


# API Reference

You can import the Postman Collection [here](./docs/test.postman)


# Tests
To be implemented


# License
MIT
