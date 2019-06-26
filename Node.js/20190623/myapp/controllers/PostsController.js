var fs = require('fs');

class PostsController {
    static getAll() {
        var posts = [];
        return new Promise((resolve, reject) => {
            fs.readFile('./data/posts.json', function (err, data) {
                if (!err) {
                    posts = JSON.parse(data);
                    resolve(posts);
                } else {
                    reject(err);
                }
            });
        })
    }

    static getAllWithRender(req, res) {
        var posts = [];
        fs.readFile('./data/posts.json', function (err, data) {
            posts = JSON.parse(data);
            res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
        });
    }

    static getSingleWithRender(req, res) {
        var id = req.params.id;
        var posts = [];
        var postToView = "";


        fs.readFile('./data/posts.json', function (err, data) {
            posts = JSON.parse(data);
            posts.filter(function (post) {
                if (post.id == id) {
                    postToView = post;
                    res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
                }
            })
        });
    }


    static getSingle(id) {
        var posts = [];
        var postToView = "";

        return new Promise((resolve, reject) => {

            fs.readFile('./data/posts.json', function (err, data) {
                posts = JSON.parse(data);
                posts.filter(function (post) {
                    if (post.id == id) {
                        postToView = post;
                        resolve(postToView);
                        // console.log(post);
                        // return true;
                    } else {
                        // return false;
                    }
                })
            });
        });
    }

}

module.exports = PostsController;



