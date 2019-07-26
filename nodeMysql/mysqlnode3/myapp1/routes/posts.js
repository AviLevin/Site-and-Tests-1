var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express home' });
});


/* GET single post . */
router.get('/:id', function(req, res, next) {
    res.render('index', { title: 'Express ' });
  });


  /* GET delete post form. */
router.get('/:id/del', function(req, res, next) {
    res.render('index', { title: 'Express fff' });
  });


  /* GET edit post - update. */
router.get('/:id/edit', function(req, res, next) {
    res.render('index', { title: 'Express fff' });
  });


  /* GET add post - update. */
router.get('/add', function(req, res, next) {
    res.render('index', { title: 'add' });
  });




module.exports = router;
