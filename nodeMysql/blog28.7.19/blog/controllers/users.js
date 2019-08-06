var connection = require('../services/mysql');

class UsersController {

    static getLoginForm(req, res, next) {
        res.render("users/login", { title: "Login Form" });
    }

    static getRegisterForm(req, res, next) {
        res.render("users/register", { title: "New User" });
    }

    static insertUser(req, res, next) {
        res.send("insertUser");
    }

    static checkLogin(req, res, next) {
        res.send("checkLogin");
    }
}

module.exports = UsersController;



