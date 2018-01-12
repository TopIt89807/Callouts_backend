var express = require('express');
var router = express.Router();
var users_controller = require('../../controllers/usersController');

router.post('/signup', users_controller.signup);
router.post('/login', users_controller.login);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
