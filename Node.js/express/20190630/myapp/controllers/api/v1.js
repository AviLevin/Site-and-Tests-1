var fs = require('fs');

class ApiV1Controller {
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
        console.log(req.session);

        var posts = [];
        fs.readFile('./data/posts.json', function (err, data) {
            posts = JSON.parse(data);
            res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
        });
    }


    static getNewPage(req, res) {
        res.render('posts/new', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
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
                    // res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
                } else {
                    postToView = "";
                    // res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });

                }
            })
            
            if (postToView != "") {
                res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
            } else {
                res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
            }
        });
    }

    static getSingleWithRenderEdit(req, res) {
        var id = req.params.id;
        var posts = [];
        var postToView = "";


        fs.readFile('./data/posts.json', function (err, data) {
            posts = JSON.parse(data);
            posts.filter(function (post) {
                if (post.id == id) {
                    postToView = post;
                    res.render('posts/edit', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
                }
            })
        });
    }

    static createPost(req, res) {
        var title = req.param("title");
        var body = req.param("body");
        var id, newPost;

        PostsController.getAll()
            .then((data) => {
                console.log(data);
                console.log(title);
                console.log(body);

                id = data[data.length - 1].id + 1;
                console.log(id);
                newPost = {
                    id,
                    title,
                    body
                }
                data.push(newPost);
                // console.log(data);

                return new Promise((resolve, reject) => {
                    resolve(data);
                })

            })
            .then((posts) => {
                fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
                });
            })

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

module.exports = ApiV1Controller;



