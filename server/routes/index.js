const Router = require('express')
const router = new Router()
const orderRoute = require('./orderRouter')

router.use('/order', orderRoute)

module.exports = router

