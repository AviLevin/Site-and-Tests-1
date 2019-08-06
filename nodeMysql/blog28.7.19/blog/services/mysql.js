var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '378378',
  database: 'noam28.7'
})

connection.connect()

module.exports = connection;

