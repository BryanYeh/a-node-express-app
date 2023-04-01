const loggerx = require('../helpers/logger')

const errorHandler = {
    logger: (error, request, response, next) => {
        loggerx.error(`${error.message} %o`, error)
        next(error) // calling next middleware
    },

    responder: (error, request, response, next) => {
        const status = error.statusCode || 500
        return response.status(status).send(error.message)
    }
}
module.exports = errorHandler;