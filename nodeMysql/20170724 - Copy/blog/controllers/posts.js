var connection = require('../services/mysql');

class PostsController {
    static getAll(req, res, next) {
        connection.query('SELECT * FROM posts', function (err, rows, fields) {
            if (err) throw err

            console.log('The solution is: ', rows);
            res.render('posts/index', { title: 'Express', posts: rows })
        })
    }

    static getSingle(req, res, next) {
        let id = req.params.id;
        connection.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, function (err, rows, fields) {
            if (err) throw err

            console.log('The solution is: ', rows);
            res.render('posts/single', { title: 'Express', post: rows[0] })
        })
    }

    static getSingleEdit(req, res, next) {
        let id = req.params.id;
        connection.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, function (err, rows, fields) {
            if (err) throw err

            console.log('The solution is: ', rows);
            res.render('posts/edit', { title: 'Express', post: rows[0] })
        })
    }

}

module.exports = PostsController;



