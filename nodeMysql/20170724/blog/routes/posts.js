var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');






/* GET all posts page. */
router.get('/', postsController.getAll);

/* GET add post for inserting. */
router.get('/add', function (req, res, next) {
    res.render('posts/add', { title: 'Add' });
});

/* GET single post. */
router.get('/:id', postsController.getSingle);
/* GET delete post confirmation. */
router.get('/:id/delete', function (req, res, next) {
    res.render('posts/delete', { title: 'Delete', id: req.params.id });
});

/* GET edit post for updating. */
router.get('/:id/edit', postsController.getSingleEdit);

router.post('/', function (req, res, next) {
    res.send('action add');
});

router.put('/:id/', function (req, res, next) {
    res.send('action update');
});

router.delete('/:id', function (req, res, next) {
    res.send('action delete');
});


module.exports = router;
