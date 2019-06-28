var fs = require('fs');

class UsersController {
    static getLoginPage(req, res) {
        res.render('users/login', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
    }
    
    static getRegisterPage(req, res) {
        res.render('users/register', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
    }

    static getUser() {

    }

    static createUser() {

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

    static checkUser() {
    }

    static deleteUser() {
        //TODO: ----

    }

    static editUser() {
        //TODO: ----

    }
}

module.exports = UsersController;



