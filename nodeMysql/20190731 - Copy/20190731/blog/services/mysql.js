var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
//   port: '8889',  // Mac Users
  password: '378378',
  database: 'noam2807_b'
})

connection.connect()

module.exports = connection;

