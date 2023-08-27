const router = require('express').Router()

router.get('/', async (req, res) => {
    return res.render('index')
})

router.get('*', (req, res) => {
    throw {statusCode: 404, message: `"${req.path}" page not found`}
})

module.exports = router