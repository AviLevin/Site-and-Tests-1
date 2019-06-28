var express = require('express');
var fs = require('fs');
var PostsController = require('../controllers/PostsController');
var router = express.Router();

// /* GET posts listing. */
// router.get('/', function (req, res, next) {
//     var posts = [];
//     fs.readFile('./data/posts.json', function (err, data) {
//         posts = JSON.parse(data);
//         console.log(posts);
//         res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
//     });
// });

// /* GET posts sync listing. */
// router.get('/', function (req, res, next) {
//     var posts = [];
//     data = fs.readFileSync('./data/posts.json');
//     posts = JSON.parse(data);
//     console.log(posts);
//     res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
// });


// /* GET posts promise listing. */
// router.get('/', function (req, res, next) {
//     getData()
//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("1")
//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("2")

//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("3")

//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("4")

//                 resolve(data);
//             })

//         }).then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("1")
//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("2")

//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("3")

//                 resolve(data);
//             })

//         })

//         .then((data) => {
//             console.log(data);
//             return new Promise((resolve, reject) => {
//                 console.log("4")

//                 resolve(data);
//             })

//         })


//         .then((data) => {
//             res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", t });
//         })
//         .catch((data) => {
//             res.send('error occur');
//         });
// });



// /* GET posts promise listing. */
// router.get('/', function (req, res, next) {
//     PostsController.getAll().then(posts => {
//         res.render('posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
//     })
// });

/* GET posts promise listing. */
router.get('/', function (req, res, next) {
    PostsController.getAllWithRender(req, res);
});

/* GET posts listing. */
router.get('/:id', function (req, res, next) {
    PostsController.getSingleWithRender(req, res);
});

/* GET posts listing. */
router.get('/:id/edit', function (req, res, next) {
    PostsController.getSingleWithRender(req, res)
});



// /* GET posts listing. */
// router.get('/:id', function (req, res, next) {
//     PostsController.getSingle(req.params.id).then(post => {
//         res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
//     })
// });



// /* GET posts listing. */
// router.get('/:id/edit', function (req, res, next) {
//     PostsController.getSingle(req.params.id).then(post => {
//         res.render('posts/edit', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post });
//     })
// });







// function getData() {
//     // posts = [];
//     return new Promise((resolve, reject) => {
//         fs.readFile('./data/posts.json', function (err, data) {
//             if (!err) {
//                 posts = JSON.parse(data);
//                 resolve(posts);

//             } else {
//                 reject("posts error");
//             }
//         });
//     })
// }




/* GET posts listing. */
router.get('/new', function (req, res, next) {
    res.render('posts/new', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
});

// /* GET posts listing. */
// router.get('/:id', function (req, res, next) {
//     var id = req.params.id;
//     var postToView;
//     fs.readFile('./data/posts.json', function (err, data) {
//         posts = JSON.parse(data);
//         posts.filter(function (post) {
//             if (post.id == id) {
//                 postToView = post;
//                 console.log(post);
//                 return true
//             } else {
//                 return false;
//             }
//         })
//         res.render('posts/single', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post: postToView });
//     });
// });

// /* GET posts listing. */
// router.get('/:id/edit', function (req, res, next) {
//     var id = req.params.id;
//     var postToView;
//     fs.readFile('./data/posts.json', function (err, data) {
//         posts = JSON.parse(data);
//         posts.filter(function (post) {
//             if (post.id == id) {
//                 postToView = post;
//                 console.log(post);
//                 return true
//             } else {
//                 return false;
//             }
//         })
//         res.render('posts/edit', { title: 'Welcome to my Blog', description: "All my post online to you!!!", post: postToView });
//     });
// });

/* GET posts listing. */
router.get('/:id/del', function (req, res, next) {
    res.send('Delete Post');
});

/* DELETE posts listing. */
router.delete('/:id', function (req, res, next) {
    res.send('Delete Post Action with id #:id');
});

// /* POST posts listing. */
// router.post('/', function (req, res, next) {
//     var title = req.param("title");
//     var body = req.param("body");
//     console.log("0");
//     fs.readFile('./data/posts.json', function (err, data) {
//         posts = JSON.parse(data);
//         id = posts[posts.length - 1].id + 1;
//         console.log(id);
//         newPost = {
//             id,
//             title,
//             body
//         }
//         console.log("1");

//         posts.push(newPost);
//         fs.writeFile('./data/posts.json', JSON.stringify(posts), function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//             res.render('/posts/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts });
//             console.log("2")
//         });
//     });
//     // console.log("3");
// });


/* POST posts listing. */
router.post('/', function (req, res, next) {
    var title = req.param("title");
    var body = req.param("body");

    getData()
        .then((data) => {
            id = data[posts.length - 1].id + 1;
            console.log(id);
            newPost = {
                id,
                title,
                body
            }
            data.push(newPost);
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
});

/* PUT posts listing. */
router.put('/:id', function (req, res, next) {
    res.send(`Update Post with id #${req.params.id}`);
});

module.exports = router;
