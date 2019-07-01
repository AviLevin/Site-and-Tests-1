var express = require('express');
var fs = require('fs');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/posts', function (req, res, next) {

    var posts = [];
    fs.readFile('./data/posts.json', 'utf8', function (err, data) {
        res.send(data);
    })


});

router.get('/posts/:id', function (req, res, next) {
    var id = req.params.id;
    var postToView = "";
    fs.readFile('./data/posts.json', function (err, data) {
        posts = JSON.parse(data);
        posts.filter(function (post) {
            if (post.id == id) {
                postToView = post;
            }
        })
        if (postToView == "") {
            postToView = { status: "NuNuNu to you", data: "lama ata shovav!" }
        }
        res.send(postToView);
    });
});


router.post('/posts', function (req, res, next) {
    var title = req.param("title");
    var body = req.param("body");
    var id, newPost;

    fs.readFile('./data/posts.json', function (err, data) {
        data = JSON.parse(data);
        id = data[data.length - 1].id + 1;
        console.log(id);
        newPost = {
            id,
            title,
            body
        }
        data.push(newPost);
        fs.writeFile('./data/posts.json', JSON.stringify(data), function (err) {
            if (err) res.send({ ststus: "error" });
            res.send({ ststus: data[data.length - 1] })
                ;
        });

    })
})

router.get('/todos', function (req, res, next) {

    setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data[0].title);
                console.log(response.data[0].completed);
                res.send(404, { todos: response.data })

            })
            .catch(error => {
                console.log(error);
            });

    }, 5000);


})


module.exports = router;
