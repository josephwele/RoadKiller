// mongo schema
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4
  }
})

const userSignUp = mongoose.model('userSignUp', userSchema)

module.exports = userSignUp
