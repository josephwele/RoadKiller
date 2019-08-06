const express = require('express')
const passport = require('passport')
const Account = require('../models/user')
const router = express.Router()
router.get('/', (req, res) => {
    res.send("ok")
        //res.sendFile(path.join(__dirname, 'RoadKiller/client/build/index.html'))
})

router.get('/register', (req, res) => {
    res.send('ok')
})

router.post('/register', (req, res, next) => {
    console.log('from index', req.body)
    Account.register(new Account({ username: req.body.email }), req.body.pass, (err, account) => {
            if (err) {
                console.log(err.message)
                return res.send(err)
            }

            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        console.log(err.message)
                        return res.send(err.message)
                    }
                    res.redirect('/register')
                })
            })
        })
        // res.send('status fine')
})

router.get('/login', (req, res) => {
    console.log('login requested')
    res.send('ok')
        // res.render('login', { user: req.user, error: req.flash('error') })
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    req.session.save((err) => {
        if (err) {
            console.log(err)
        }
    })
    res.send('ok')
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
    res.status('form submitted')
})

module.exports = router