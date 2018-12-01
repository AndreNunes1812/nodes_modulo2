const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename } = req.file

    if (req.body.provider === undefined) {
      req.body.provider = 0
    }

    await User.create({ ...req.body, avatar: filename })

    return res.redirect('/')
  }
}

module.exports = new UserController()
