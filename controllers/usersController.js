const users = require('../models/users');

exports.signup = (req, res) => {
    res.send(req.body);
    const newUser = new users({
      email: req.body.email,
      hashed_password: req.body.password,
    });
  
    newUser.save();
}