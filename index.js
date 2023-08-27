require('dotenv').config()

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const routes = require('./routes')

const errorHandler = require('./middlewares/errorHandler.middleware.js')

// use handlebars templating engine
// use .hbs extension instead of handlebars, can change ".hbs" to ".handlebars"
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'app',
        helpers: {
            route(path) {
                return process.env.APP_URL + ':' + process.env.APP_PORT + path
            },
            config(name) {
                return process.env[name]
            },
            old(obj, key) {
                return obj ? obj[key] : ''
            },
        },
    })
)
app.set('view engine', '.hbs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

// Constants
const PORT = process.env.DOCKER_PORT || 3000
const HOST = '0.0.0.0'

// App
app.use('/', routes)

app.use(errorHandler.logger)
app.use(errorHandler.responder)

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
