const users = require('../models/users');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

exports.signup = (req, res) => {

  const {email, password, user_type} = req.body;  

  if(!email || !password) {
    res.status(400).json({ message: 'Invalid Request!'});
  }else {

    users.find({email: email})
      .then((results) => {
        if (results.length == 0) {

          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(password, salt);

          const newUser = new users({
            email: email,
            hashed_password: hash,
            user_type: req.body.user_type
          });

          newUser.save();
          res.status(201).json({ message: 'User Registered Successfully!'});
        } else {
          res.status(409).json({ message: 'User Already Registered!'});
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });

  }
}

exports.login = (req, res) => {
  const {email, password} = req.body;
  
  if(!email || !password) {
    res.status(400).json({ message: 'Invalid Request!'});
  }else {
    users.find({email: email})
      .then((user) => {
        if(user.length == 0) {
          res.status(404).json({ message: "User Not Found!"});
        } else {
          return user[0];
        }
      })
      .then((user) => {
        if(bcrypt.compareSync(password, user.hashed_password)) {
          const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: config.expiresIn})
          const info = {
            email: user.email,
            user_type: user.user_type
          }
          res.status(200).json({ message: "Login Successfully!", user: info, token: token});
        } else {
          res.status(401).json({ message: "Invalid Credentials!"});
        }
      })
      .catch((err) => {
        res.status(500).json({message: err});
      });
  }
}