var express = require('express');
var fs = require('fs');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/blog', function (req, res, next) {
    fs.readFile('./data/posts.json', 'utf8', function (err, posts) {
        fs.readFile('./data/users.json', 'utf8', function (err, users) {
            users = JSON.parse(users);
            posts = JSON.parse(posts);
            usersDis = [];
            u = users.map(user => {
                usersDis[user.id] = user;
                return user;
            })

            p = posts.map(post => {
                // post.user = users[post.userId - 1];
                post.userData = usersDis[post.userId];
                post.userId = undefined;
                return post;
            })
            res.send(p);
        });
    });
});

router.get('/jokes', function (req, res, next) {
    axios.get('http://api.icndb.com/jokes')
        .then(function (response) {
            console.log(response.data.value);
            
            // handle success
            res.send(response.data.value);
        })
});

module.exports = router;
