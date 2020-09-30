const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.post('/customers/register', Controller.register)
router.post('/customers/newAccount', Controller.makeAccount)
router.get('/customers', Controller.showCustomer)

router.get('/', function(req, res) {
    res.status(200).json({
        message: 'Connected!'
    })
})

module.exports = router