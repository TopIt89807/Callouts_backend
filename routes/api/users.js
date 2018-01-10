var express = require('express');
var router = express.Router();
const users = require('../../models/users');
var users_controller = require('../../controllers/usersController');


router.post('/signup', users_controller.signup);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
