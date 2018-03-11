var express = require('express');
var router = express.Router();
var post_controller = require('../../controllers/postController');

router.post('/add', post_controller.add);
router.put('/update', post_controller.update);
router.post('/get_posts', post_controller.getPosts);
router.get('/get_all', post_controller.getAll);
router.delete('/delete', post_controller.delete);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
