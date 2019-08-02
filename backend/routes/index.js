const express = require('express')
const passport = require('passport')
const Account = require('../models/user')
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('index', { user: req.user })
    res.send('status is ok')
})

router.get('/register', (req, res) => {
    // res.render('register', {})
    res.send('status is ok')
})

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username: req.body.username }), req.body.password, (err, account) => {
        if (err) {
            return // res.render('register', { error: err.message })
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
    res.send('ok')
})

router.get('/login', (req, res) => {
    res.send('login requested')
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
    res.status(200)
})

module.exports = router