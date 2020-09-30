const { Account, Customer } = require('../models')
const { generate } = require('../helpers/generateRandom')

class Controller {

    static register(req, res) {
        const obj = {
            identityNumber: generate(20) || '',
            fullName: req.body.fullName || 'Placeholder fullName',
            address: req.body.address || 'Placeholder address',
            birthDate: req.body.birthDate || '12/12/2012',
            gender: req.body.gender || 'male',
            otp: generate(5) || '',
        }
        console.log('Register customer:', obj)

        // Harusnya pakai beforeCreate //

        Customer.create(obj)
        .then(data => {
            res.status(201).json({
                message: 'Register successful!',
                otp: obj.otp
            })
        })
        .catch(err => res.status(500).json({
            warning: 'Error!',
            message: err.errors[0].message || 'Check for more detail',
            err: err,
        }))
    }

    static showCustomer(req, res) {
        console.log('Show customer:')

        Customer.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.status(500).json({
            warning: 'Error!',
            message: err.errors[0].message || 'Check for more detail',
            err: err,
        }))
    }

    static makeAccount(req, res) {
        let otp = req.headers.otp

        if (!otp) {
            res.status(401).json({
                warning: 'You are not authenticated!'
            })
        }

        // Ini buat authorization + association? Nggak ada penjelasan di soalnya, nggak ada detail FK //

        const obj = {
            type: req.body.type || 'On Account',
            accountNumber: generate(10),
            balance: req.body.balance || 500000,
        }
        console.log('Make account:', obj)

        Account.create(obj)
        .then(data => {
            res.status(201).json({
                message: 'Account has been created!',
                accountType: data.type,
                balance: data.balance,
            })
        })
        .catch(err => res.status(500).json({
            warning: 'Error!',
            message: err.errors[0].message || 'Check for more detail',
            err: err,
        }))
    }
}

module.exports = Controller