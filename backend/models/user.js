const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    start: Number,
    destination: Number,
    date: Date,
    phonenum: Number

});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);