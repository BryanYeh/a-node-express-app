require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('./helpers/logger')

const errorHandler = require('./middlewares/errorHandler.middleware.js')

// Constants
const PORT = process.env.DOCKER_PORT || 3000
const HOST = '0.0.0.0'

// App
app.get('/', async (req, res, next) => {
    // res.send('Hello World!')
    try {
        let error = new Error('try again')
        error.statusCode = 500
        throw error
    } catch (error) {
        return next(error)
    }
})

    // Cause an error
    app.get('/error', async (req, res, next) => {
        try {
            let error = new Error('This is a major issue!!')
            error.statusCode = 500
            throw error
        } catch (error) {
            return next(error)
        }
    })

    // Just logging
    app.get('/log', async (req, res, next) => {
        logger.info('hello from /log')
        res.send('hello')
    })

app.use(errorHandler.logger)
app.use(errorHandler.responder)

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
