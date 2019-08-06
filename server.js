// dependencies
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var routes = require('./backend/routes/index')
var users = require('./backend/routes/user')
var mongodbUrl = require('./config/keys').mongoURL
var app = express()
const PORT = process.env.PORT || 3001

// view engine setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('express-session')({
    secret: 'coding class is a mess',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/', routes)
    // passport config
var Account = require('./backend/models/user')
passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

// catch 404 and forward to error handler
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}
// mongoose
mongoose.Promise = require('bluebird')
mongoose.Promise = global.Promise
mongoose.connect(process.env.mongoURL || 'mongodb://localhost/Roadkiller',
    function() {
        console.log('mongose started')
    })


// production error handler
// no stacktraces leaked to user
app.use(function(req, res, next) {
    var _send = res.send
    var sent = false
    res.send = function(data) {
        if (sent) return
        _send.bind(res)(data)
        sent = true
    }
    next()
})
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})