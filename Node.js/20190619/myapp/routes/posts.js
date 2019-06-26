var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET posts listing. */
router.get('/', function (req, res, next) {
    fs.readFile('./data/posts.json', function (err, data) {
        posts = JSON.parse(data);
        res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
    });
});

/* GET posts listing. */
router.get('/new', function (req, res, next) {
    res.render('posts/new', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
});

/* GET posts listing. */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var postToView;
    fs.readFile('./data/posts.json', function (err, data) {
        posts = JSON.parse(data);
        posts.filter(function(post) {
            if(post.id == id) {
                postToView = post;
                console.log(post);
                return true
            } else {
                return false;
            }
        })
        res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post: postToView });
    });
});

/* GET posts listing. */
router.get('/:id/edit', function (req, res, next) {
    var id = req.params.id;
    var postToView;
    fs.readFile('./data/posts.json', function (err, data) {
        posts = JSON.parse(data);
        posts.filter(function(post) {
            if(post.id == id) {
                postToView = post;
                console.log(post);
                return true
            } else {
                return false;
            }
        })
        res.render('posts/edit', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post: postToView });
    });
});

/* GET posts listing. */
router.get('/:id/del', function (req, res, next) {
    res.send('Delete Post');
});

/* DELETE posts listing. */
router.delete('/:id', function (req, res, next) {
    res.send('Delete Post Action with id #:id');
});

/* POST posts listing. */
router.post('/', function (req, res, next) {
    var title = req.param("title");
    var body = req.param("body");
    fs.readFile('./data/posts.json', function (err, data) {
        posts = JSON.parse(data);
        id = posts[posts.length-1].id + 1;
        console.log(id);
        newPost = {
            id,
            title,
            body
        }
        posts.push(newPost);
        fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
            if (err) throw err;
            console.log('Saved!');
            res.render('/posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
          });
    });
});

/* PUT posts listing. */
router.put('/:id', function (req, res, next) {
    res.send('Update Post with id #:id');
});

module.exports = router;
