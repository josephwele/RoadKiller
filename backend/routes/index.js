const express = require('express')
const passport = require('passport')
const Account = require('../models/user')
const router = express.Router()
router.get('/', (req, res) => {
    res.sendFile(path.join('__dirname, ../../client/build/index.html'))
})

router.get('/register', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

router.post('/register', (req, res, next) => {
    console.log('from index', req.body)
    Account.register(new Account({ username: req.body.email }), req.body.pass, (err, account) => {
            if (err) {
                return res.send(err)
            }

            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return err
                    }
                    res.redirect('/')
                })
            })
        })
        // res.send('status fine')
})

router.get('/login', (req, res) => {
    console.log('login requested')
        // res.render('login', { user: req.user, error: req.flash('error') })
})

router.post('/login', passport.authenticate('local'), function(req, res) {
        res.send('loged in correctly')
    }

)

router.get('/logout', (req, res, next) => {
    req.logout()
    req.session.save((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})

router.get('/form', (req, res) => {
    res.status('form submitted')
})

module.exports = router