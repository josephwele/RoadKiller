const express = require('express')
const passport = require('passport')
const Account = require('../models/user')
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('index', { user: req.user })
    res.send('you have reached the home page')
})

router.get('/register', (req, res) => {
    res.send('login currently')
    console.log('register accessed')
        // res.render('register', {})
})

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username: req.body.email }), req.body.pass, (err, account) => {
        if (err) {
            return res.send(err)
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err)
                }
                res.redirect('/')
            })
        })
    })
    res.send('status fine')
})

router.get('/login', (req, res) => {
    console.log('login requested')
        // res.render('login', { user: req.user, error: req.flash('error') })
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
})

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
    res.status(200).send('pong!')
})

module.exports = router