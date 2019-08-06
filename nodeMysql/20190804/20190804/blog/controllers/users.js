var connection = require('../services/mysql');

class UsersController {

    static getLoginForm(req, res, next) {
        res.render("users/login", { title: "Login Form" });
    }

    static getRegisterForm(req, res, next) {
        res.render("users/register", { title: "New User" });
    }

    static insertUser(req, res, next) {

        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.email;
        let lname = req.body.lname;
        let fname = req.body.fname;
        connection.query(`INSERT INTO users (username, password, email, first_name, last_name) VALUES ("${username}", "${password}", "${email}", "${lname}", "${fname}")`, function (err, rows, fields) {
            if (err) throw err
            console.log('The solution is: ', rows);
            res.redirect("/posts");
            // PostsController.getAll(req, res, next);
        })
    }

    static checkLogin(req, res, next) {
        res.send("checkLogin");
    }
}

module.exports = UsersController;



