var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'msima3'
})

// connection.connect()


/* GET home page. */
router.get('/news', function (req, res, next) {
    connection.query('SELECT * FROM articles WHERE category="news"', function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', JSON.stringify(rows))
        res.send(rows);
    })
});

/* GET home page. */
router.get('/sports', function (req, res, next) {
    connection.query('SELECT * FROM articles WHERE category="sports"', function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', JSON.stringify(rows))
        res.send(rows);
    })
});

/* GET home page. */
router.get('/article/:id', function (req, res, next) {

    var article, comments;

    connection.query(`SELECT * FROM articles WHERE id="${req.params.id}" LIMIT 1`, function (err, rows, fields) {
        if (err) throw err

        article = rows[0];
        connection.query(`SELECT * FROM comments WHERE article_id="${req.params.id}"`, function (err, rows, fields) {
            if (err) throw err

            comments = rows;
            console.log('The solution is: ', JSON.stringify(rows))
            res.send({article,comments});
        })
    })
});

/* GET home page. */
router.post('/comment', function (req, res, next) {
    article_id = req.body.article_id;
    title = req.body.title;
    body = req.body.body;
    connection.query(`INSERT INTO comments (title, body, article_id) VALUES ('${title}', '${body}', '${article_id}')`, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows)
        res.send(`{status: "success", id:${rows.insertId}}`);
    })
});

module.exports = router;
