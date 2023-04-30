require('dotenv').config()

const express = require('express')
const app = express()
const { ServerError } = require('./exceptions/ServerError')

const errorHandler = require('./middlewares/errorHandler.middleware.js')

// Constants
const PORT = process.env.DOCKER_PORT || 3000
const HOST = '0.0.0.0'

// App
app.get('/', async (req, res, next) => {
    // res.send('Hello World!')
    try {
        // res.send('hello')
        throw new ServerError()
    } catch (error) {
        return next(error)
    }
})

app.use(errorHandler.logger)
app.use(errorHandler.responder)

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
