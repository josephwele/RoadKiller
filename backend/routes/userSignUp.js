// import from models/user.js (mongoose query builder)
const User = require('../models/user.js')

module.exports = function (app) {
  // sign up route
  app.post('/signup', (req, res) => {
    const firstName = req.body.firstName
    const newUser = new User({ firstName })

    newUser.save()
      .then(() => res.json('User added'))
      .catch(err => res.status(400).json('Error: ' + err))
  })
}
