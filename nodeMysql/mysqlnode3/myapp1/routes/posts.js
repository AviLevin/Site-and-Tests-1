var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');


/* GET all posts page. */
router.get('/', postsController.getAll);



/* GET single post. */
router.get('/:id', postsController.getSingle);

//   /* GET delete post form. */
// router.get('/:id/del', function(req, res, next) {
//     res.render('index', { title: 'Express fff' });
//   });


/* GET add post for inserting. */
router.get('/add', function (req, res, next) {
    res.render('posts/add', { title: 'Add' });
});
  router.post('/add', postsController.insertPost);



/* GET edit post for updating. */
router.get('/:id/edit', postsController.getSingleEdit);
router.put('/:id/edit', postsController.updatePost);



module.exports = router;
