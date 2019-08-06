var connection = require("../services/mysql");

class PostsController {
  static getAll(req, res, next) {
    connection.query("SELECT * FROM posts", function(err, rows, fields) {
      if (err) throw err;

      console.log("The solution is: ", rows);
      res.render("posts/index", { title: "Express", posts: rows });
    });
  }

  static insertPost(req, res, next) {
    let title = req.body.title;
    let body = req.body.body;
    connection.query(
      `INSERT INTO posts (title, body) VALUES ("${title}", "${body}")`,
      function(err, rows, fields) {
        if (err) throw err;
        console.log("The solution is: ", rows);
        res.redirect("/posts");
        // PostsController.getAll(req, res, next);
      }
    );
  }



  static updatePost(req, res, next) {
    let id = req.params.id;
    let title = req.body.title;
    let body = req.body.body;
    console.log(title, body);
    console.log(`UPDATE posts SET title = "${title}" , body= "${body}" WHERE id = ${id}`);
    connection.query(`UPDATE posts SET title = "${title}" , body= "${body}" WHERE id = ${id}`, function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows);
        res.redirect("/posts");
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


  static getSingle(req, res, next) {
    let id = req.params.id;
    connection.query(`SELECT * FROM posts WHERE id = ${id} LIMIT 1`, function(
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      console.log("The solution is: ", rows);
      res.render("posts/single", { title: "Express", post: rows[0] });
    });
  }
}

module.exports = PostsController;
