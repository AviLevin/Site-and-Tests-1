var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
//   port: '8889',  // Mac Users
  password: 'root',
  database: 'noam_blog'
})

connection.connect()

module.exports = connection;

