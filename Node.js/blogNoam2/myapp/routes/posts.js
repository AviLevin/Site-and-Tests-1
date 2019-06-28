var express = require('express');
var fs = require('fs');
var PostsController = require('../controllers/PostsController');
var router = express.Router();



/* GET posts listing. */
router.get('/', PostsController.getAllWithRender);

/* GET post new listing. */
router.get('/new', PostsController.getNewPage);

/* GET post listing. */
router.get('/:id', PostsController.getSingleWithRender);

/* GET post edit listing. */
router.get('/:id/edit', PostsController.getSingleWithRenderEdit);


/* GET posts listing. */
router.get('/:id/del', function (req, res, next) {
    res.send('Delete Post');
});

/* DELETE posts listing. */
router.delete('/:id', function (req, res, next) {
    res.send('Delete Post Action with id #:id');
});

/* POST posts listing. */
router.post('/', PostsController.createPost);

/* PUT posts listing. */
router.put('/:id', function (req, res, next) {
    res.send(`Update Post with id #${req.params.id}`);
});

module.exports = router;
