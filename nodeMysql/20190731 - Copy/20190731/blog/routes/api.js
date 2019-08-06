var express = require('express');
var router = express.Router();
var ApiController = require('../controllers/api');


/* GET all posts page. */
router.get('/', ApiController.getAll);


router.post('/add', ApiController.insertPost);


/* GET single post. */
router.get('/:id', ApiController.getSingle);


/* GET delete post confirmation. */
router.get('/:id/delete', function (req, res, next) {
    res.render('posts/delete', { title: 'Delete', id: req.params.id });
});

/* GET delete post confirmation. */
router.delete('/:id/delete', ApiController.deleteSingle);


/* GET edit post for updating. */
router.get('/:id/edit', ApiController.getSingleEdit);
router.put('/:id/edit', ApiController.updatePost);

module.exports = router;
