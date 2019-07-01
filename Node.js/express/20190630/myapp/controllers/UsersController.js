var fs = require('fs');

class UsersController {

    static getAll() {
        var users = [];
        return new Promise((resolve, reject) => {
            fs.readFile('./data/users.json', function (err, data) {
                if (!err) {
                    users = JSON.parse(data);
                    resolve(users);
                } else {
                    reject(err);
                }
            });
        })
    }


    static getLoginPage(req, res) {
        res.render('users/login', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
    }

    static getRegisterPage(req, res) {
        res.render('users/register', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
    }

    static getUser() {

    }

    static createUser(req, res) {
        var username = req.param("username");
        var password = req.param("password");
        var users = [];
        var isUserExsist = false;
        var id, newUser;

        UsersController.getAll()
            .then((data) => {
                data.filter(function (user) {
                    if (user.username == username) {
                        isUserExsist = true;
                    }
                    return true;
                })

                if (isUserExsist) {
                    res.render('users/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", users });
                } else {
                    console.log(data);
                    console.log(username);
                    console.log(password);

                    id = data.length ? data[data.length - 1].id + 1 : 1;
                    console.log(id);
                    newUser = {
                        id,
                        username,
                        password
                    }
                    data.push(newUser);
                    fs.writeFile('./data/users.json', JSON.stringify(data), function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                        res.render('users/index', { title: 'Welcome to my Blog', description: "All my post online to you!!!", data });
                    });
                }
            })

    }

    static checkUser(req, res) {
        var username = req.param("username");
        var password = req.param("password");
        var isLogin = false;
        var id, newUser;

        UsersController.getAll()
            .then((data) => {
                data.filter(function (user) {
                    if (user.username == username && user.password == password) {
                        isLogin = true;
                    }
                    return true;
                })

                if (isLogin) {
                    req.session.isLogin = true;
                    return res.redirect('/posts', 200, { title: 'Welcome to my Blog', description: "All my post online to you!!!", posts: [], isLogin });
                } else {
                    res.render('users/login', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
                }
            })

    }

    static logoutUser(req, res) {
        req.session.destroy();
        res.render('users/login', { title: 'Welcome to my Blog', description: "All my post online to you!!!" });
    }

    static editUser() {
        //TODO: ----

    }
}

module.exports = UsersController;



